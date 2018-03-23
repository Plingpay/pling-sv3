import {Injectable} from "@angular/core";
import {HomePage} from "../pages/home/home";

@Injectable()

export class BaseSingleton {
  public paymentOptionsView: any;
  public contactListView: any;
  public actionSource: string = HomePage.SOURCE_TRANSACTION;

  public currentUserPaymentMethod: any;
  public currentUserStatus: string;
  public currentUserCountry: string;
  public currentUserPaymentMethodSelected: boolean = false;
  public transactionDetails: any = {
    phoneNumber: '',
    amount: '',
    currency: '',
    currencyFrom: '',
    comment: '',
    showCommentInput: false
  };

  constructor() {

  }

  public initiateTransactionDetails() {
    this.transactionDetails = {
      phoneNumber: '',
      amount: '',
      currency: '',
      currencyFrom: '',
      comment: '',
      showCommentInput: false
    }
  }

}
