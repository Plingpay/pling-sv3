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
import {BaseProvider} from "../../providers/baseProvider";

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

  @ViewChild('fab') fabButton;

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

  public requestsArray: Array<boolean> = [];

  public fabClicked: boolean = false;

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

  doRefresh(refresher) {
    this.reloadData(refresher);
  }

  private requestCompleted(refresher) {
    this.requestsArray.pop();
    if (refresher && this.requestsArray.length === 0) {
      refresher.complete();
    }
  }

  private requestStarted(refresher) {
    this.requestsArray.push(true);
  }

  reloadData(refresher = false) {
    this.requestStarted(refresher);
    this.userProvider.status(refresher?BaseProvider.HIDE_LOADING:'').then(
      data => {
        this.requestCompleted(refresher);
        let userStatus = data;
        this.baseSingleton.currentUserPaymentMethod = userStatus.payment_method;
        this.baseSingleton.currentUserStatus = userStatus.status;
        this.baseSingleton.currentUserCountry = userStatus.country;
        this.baseSingleton.currentUserPaymentMethodSelected = userStatus.payment_method_selected;
        this.baseSingleton.currentUserPhone = userStatus.phone_number;
        this.userStatus = userStatus.status;
        this.rejectReason = userStatus.reason;
        this.userID = userStatus.user_id;
        this.documentsUploaded = userStatus.documents_uploaded;
        this.verified = userStatus.verify;
        this.content.resize();
      }, err => {this.requestCompleted(refresher);}
    );
    this.requestStarted(refresher);
    this.balanceProvider.balances(refresher?BaseProvider.HIDE_LOADING:'').then(data => {
      this.requestCompleted(refresher);
      this.balance = data.results
    }, err => {this.requestCompleted(refresher)});
    this.requestStarted(refresher);
    this.transactionsProvider.transactions(refresher?BaseProvider.HIDE_LOADING:'').then(data => {
      this.requestCompleted(refresher);
      this.transactions = data.results;
      this.transactions.forEach(transaction => {
        transaction['source_type'] = HomePage.SOURCE_TRANSACTION;
      });
      this.requestStarted(refresher);
      this.paymentRequestsProvider.paymentRequests(refresher?BaseProvider.HIDE_LOADING:'').then(requestsData => {
        this.requestCompleted(refresher)
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
      }, err => {this.requestCompleted(refresher)})
    }, err => {this.requestCompleted(refresher)});
    this.requestStarted(refresher);
    this.transactionsProvider.paymentMethods(refresher?BaseProvider.HIDE_LOADING:'').then(data => {
      this.requestCompleted(refresher);
      this.paymentMethods = data.results}, err => {this.requestCompleted(refresher)});
  }

  ionViewDidEnter() {
    this.reloadData();
  }

  verifyProfile() {
    this.navCtrl.push(VerifyAccountPage, {userID: this.userID});
  }

  goToRates() {
    if (this.blurPage) return;
    this.navCtrl.push(ExchangeRatesPage);
  }

  sendMoney(fab: any = false) {
    if (fab) {
      fab.close();
      this.blurPage = false;
    }
    this.baseSingleton.initiateTransactionDetails();
    this.baseSingleton.actionSource = HomePage.SOURCE_TRANSACTION;
    if (this.baseSingleton.currentUserPaymentMethodSelected) {
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
    if (this.blurPage) return;
    this.navCtrl.push(ProfilePage);
  }

  processTransaction(transaction) {
    if (this.blurPage) return;
    if (transaction.source_type !== HomePage.SOURCE_REQUEST) return;
    if ('id' in this.baseSingleton.currentUserPaymentMethod) {
      this.baseSingleton.transactionDetails.amount = transaction.amount;
      this.baseSingleton.transactionDetails.currency = transaction.currency.currency;
      this.baseSingleton.transactionDetails.currencyFrom = transaction.currency_from.currency;
      this.baseSingleton.transactionDetails.phoneNumber = transaction.user.phone_number;
      //this.baseSingleton.transactionDetails.comment = transaction.comment;
      this.transactionsProvider.prepareTransaction({
        amount_to: this.baseSingleton.transactionDetails.amount,
        phone_number_to: this.baseSingleton.transactionDetails.phoneNumber,
        currency_to: this.baseSingleton.transactionDetails.currency,
        currency_from: this.baseSingleton.transactionDetails.currencyFrom,
        //comment: this.baseSingleton.transactionDetails.comment
      }).then(transaction => {
        this.navCtrl.push(TransactionSubmitPage, {transaction: transaction.transaction, fromRequest: true});
      }, err => {
      });
    } else {
      this.navCtrl.push(ChoosePaymentMethodPage, {source: ChoosePaymentMethodPage.SOURCE_PAYMENT_REQUEST, transaction: transaction});
    }
  }

  toggleBlur() {
    this.fabClicked = true;
    this.blurPage = !this.blurPage;
  }

  withdraw(balanceID) {
    if (this.blurPage) return;
    this.navCtrl.push(ChooseWithdrawalMethodPage, {balanceID: balanceID})
  }

  clickOnContent() {
    if (this.blurPage && !this.fabClicked) {
      this.blurPage = false;
      this.fabButton.close();
    }
    this.fabClicked = false;
  }

}
