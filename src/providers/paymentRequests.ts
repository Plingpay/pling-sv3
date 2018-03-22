import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()
export class PaymentRequestsProvider extends BaseProvider {
  paymentRequests(source: string = '') {
    return this.makeRawRequest('get', 'payment_requests', {}, source);
  }

  sendPaymentRequest(data) {
    if (!data.comment) delete data.comment;
    return this.makeRawRequest('post', 'payment_requests', data);
  }

  savePaymentRequestAsTemplate(id) {
    return this.makeRawRequest('post', 'payment_requests/' + id + '/' + 'save_as_template');
  }

  approvePaymentRequest(id) {
    return this.makeRawRequest('post', 'payment_requests/' + id + '/' + 'create_transaction');
  }

}
