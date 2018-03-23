import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()

export class CurrencyProvider extends BaseProvider {
  currencyList() {
    return this.makeRawRequest('get', 'currency');
  }

  currencyRate(currency, amount) {
    return this.makeRawRequest('post', 'currency', {currency: currency, amount: amount});
  }

  defaultCurrencyByUser(userPhone) {
    return this.makeRawRequest('post', 'users/currency', {phone_number: userPhone});
  }
}
