import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()
export class TransactionsProvider extends BaseProvider {
  transactions() {
    return this.makeRawRequest('get', 'transactions')
  }

  paymentMethods() {
    return this.makeRawRequest('get', 'payment_methods')
  }

  addCard(data) {
    return this.makeRawRequest('post', 'add_card', data);
  }

}
