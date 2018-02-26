import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()
export class TransactionsProvider extends BaseProvider {
  transactions() {
    return this.makeRawRequest('get', 'transactions')
  }

  lastContacts() {
    return this.makeRawRequest('get', 'last_contacts');
  }

  paymentMethods() {
    return this.makeRawRequest('get', 'payment_methods')
  }

  selectPaymentMethod(id) {
    return this.makeRawRequest('get', 'payment_methods/' + id);
  }

  addCard(data) {
    return this.makeRawRequest('post', 'add_card', data);
  }

  prepareTransaction(data) {
    if (!data.comment) delete data.comment;
    return this.makeRawRequest('post', 'transactions', data);
  }

  saveTransactionAsTemplate(id) {
    return this.makeRawRequest('post', 'transactions/' + id + '/' + 'save_as_template');
  }

  approveTransaction(id) {
    return this.makeRawRequest('post', 'transactions/' + id + '/' + 'user_approve');
  }

  cancelTransaction(id) {
    return this.makeRawRequest('post', 'transactions/' + id + '/' + 'user_cancel');
  }

  withdrawMethods() {
    return this.makeRawRequest('get', 'withdrow_methods');
  }

  checkIfTransactionTemplate(phone_number) {
    return this.makeRawRequest('post', 'transactions/check_template', phone_number, 'hideError');
  }

  editTransaction(id, data) {
    return this.makeRawRequest('put', 'transactions/' + id, data);
  }

}
