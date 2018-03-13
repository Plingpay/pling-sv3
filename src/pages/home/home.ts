import {Component, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {VerifyAccountPage} from "../verify-account/verify-account";
import {ExchangeRatesPage} from "../exchange-rates/exchange-rates";
import {BalanceProvider} from "../../providers/balance";
import {TransactionsProvider} from "../../providers/transactions";
import {ChoosePaymentMethodPage} from "../choose-payment-method/choose-payment-method";
import {ProfilePage} from "../profile/profile";
import {BaseSingleton} from "../../services/base";
import {ContactListPage} from "../contact-list/contact-list";
import * as _ from 'lodash';
import {PaymentRequestsProvider} from "../../providers/paymentRequests";
import {TransactionSubmitPage} from "../transaction-submit/transaction-submit";
import {ChooseWithdrawalMethodPage} from "../choose-withdrawal-method/choose-withdrawal-method";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public static readonly STATUS_ACTIVE = 'ACTIVE';
  public static readonly STATUS_HAVE_DOCS = "HAVE_DOCS";
  public static readonly STATUS_REJECT = "REJECTED";
  public static readonly STATUS_APPROVED = "APPROVED";
  public static readonly STATUS_NO_TRANSACTIONS = "NO_TRANSACTIONS";
  public static readonly STATUS_BLANK = "BLANK";

  public static readonly SOURCE_TRANSACTION = 'transaction';
  public static readonly SOURCE_REQUEST = 'request';

  public static readonly TRANSACTION_STATUSES = [
    {
      value: 'PENDING',
      display: 'Pending',
      className: 'transaction-status-warning'
    },
    {
      value: 'SUCCESS',
      display: 'Success',
      className: 'transaction-status-hide'
    },
    {
      value: 'CANCELED',
      display: 'Canceled',
      className: 'transaction-status-error'
    },
    {
      value: 'UNSUCCESS',
      display: 'Failed',
      className: 'transaction-status-error'
    }
  ];

  public userStatus: string;
  public documentsUploaded: boolean;
  public verified: boolean;
  public balance: Array<any>;
  public transactions: Array<any>;
  public paymentRequests: Array<any>;
  public paymentMethods: Array<any>;

  public historyToShow: any = {};
  public historyKeysToShow: Array<any>;

  public Object = Object;
  public HomePage = HomePage;

  public today = (new Date().toDateString());

  public rejectReason: string;

  public blurPage: boolean;

  private userID: number;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public balanceProvider: BalanceProvider,
              public baseSingleton: BaseSingleton,
              public transactionsProvider: TransactionsProvider,
              public paymentRequestsProvider: PaymentRequestsProvider,
              public navParams: NavParams) {
  }

  ionViewDidEnter() {
    // Call provider methods async
    this.userProvider.status().then(
      data => {
        let userStatus = data;
        this.baseSingleton.currentUserPaymentMethod = userStatus.payment_method;
        this.baseSingleton.currentUserStatus = userStatus.status;
        this.baseSingleton.currentUserCountry = userStatus.country;
        this.userStatus = userStatus.status;
        this.rejectReason = userStatus.reason;
        this.userID = userStatus.user_id;
        this.documentsUploaded = userStatus.documents_uploaded;
        this.verified = userStatus.verify;
        this.content.resize();
      }, err => {}
      );
    this.balanceProvider.balances().then(data => {this.balance = data.results}, err => {});
    this.transactionsProvider.transactions().then(data => {
      this.transactions = data.results;
      this.transactions.forEach(transaction => {
        transaction['source_type'] = HomePage.SOURCE_TRANSACTION;
      });
      this.paymentRequestsProvider.paymentRequests().then(requestsData => {
        this.paymentRequests = requestsData.results;
        this.paymentRequests.forEach(request => {
          request['source_type'] = HomePage.SOURCE_REQUEST;
        });
        let mergedArray = this.transactions.concat(this.paymentRequests);
        let sortedArray = _.sortBy(mergedArray, [(historyItem) => { return historyItem.created_at; }]);
        let groupedArray = _.groupBy(sortedArray, (historyItem) => {
          let formattedDate = (new Date(historyItem.created_at).toDateString());
          return formattedDate;
        });
        let historyKeys = _.reverse(_.keys(groupedArray));
        this.historyKeysToShow = historyKeys;
        historyKeys.forEach(key => {
            groupedArray[key] = _.reverse(groupedArray[key]);
          }
        );
        this.historyToShow = groupedArray;
      }, err => {})
    }, err => {});
    this.transactionsProvider.paymentMethods().then(data => {this.paymentMethods = data.results}, err => {});
  }

  verifyProfile() {
    this.navCtrl.push(VerifyAccountPage, {userID: this.userID});
  }

  goToRates() {
    this.navCtrl.push(ExchangeRatesPage);
  }

  sendMoney(fab: any = false) {
    if (fab) {
      fab.close();
      this.blurPage = false;
    }
    this.baseSingleton.initiateTransactionDetails();
    this.baseSingleton.actionSource = HomePage.SOURCE_TRANSACTION;
    if ('id' in this.baseSingleton.currentUserPaymentMethod) {
      this.navCtrl.push(ContactListPage);
    } else {
      this.navCtrl.push(ChoosePaymentMethodPage);
    }
  }

  requestMoney(fab: any = false) {
    if (fab) {
      fab.close();
      this.blurPage = false;
    }
    this.baseSingleton.initiateTransactionDetails();
    this.baseSingleton.actionSource = HomePage.SOURCE_REQUEST;
    this.navCtrl.push(ContactListPage);
  }

  profile() {
    this.navCtrl.push(ProfilePage);
  }

  processTransaction(transaction) {
    if (transaction.source_type !== HomePage.SOURCE_REQUEST) return;
    if ('id' in this.baseSingleton.currentUserPaymentMethod) {
      this.baseSingleton.transactionDetails.amount = transaction.amount;
      this.baseSingleton.transactionDetails.currency = transaction.currency.currency;
      this.baseSingleton.transactionDetails.currencyFrom = transaction.currency_from.currency;
      this.baseSingleton.transactionDetails.phoneNumber = transaction.user.phone_number;
      this.transactionsProvider.prepareTransaction({
        amount_to: this.baseSingleton.transactionDetails.amount,
        phone_number_to: this.baseSingleton.transactionDetails.phoneNumber,
        currency_to: this.baseSingleton.transactionDetails.currency,
        currency_from: this.baseSingleton.transactionDetails.currencyFrom,
        comment: this.baseSingleton.transactionDetails.comment
      }).then(transaction => {
        this.navCtrl.push(TransactionSubmitPage, {transaction: transaction.transaction, fromRequest: true});
      }, err => {
      });
    } else {
      this.navCtrl.push(ChoosePaymentMethodPage, {source: ChoosePaymentMethodPage.SOURCE_PAYMENT_REQUEST, transaction: transaction});
    }
  }

  toggleBlur() {
    this.blurPage = !this.blurPage;
  }

  withdraw(balanceID) {
    this.navCtrl.push(ChooseWithdrawalMethodPage, {balanceID: balanceID})
  }

}
