import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()

export class CurrencyProvider extends BaseProvider {
  currencyList() {
    return this.makeRawRequest('get', 'currency');
  }

  currencyRate(currency) {
    return this.makeRawRequest('post', 'currency', {currency: currency});
  }

  defaultCurrencyByUser(userPhone) {
    return this.makeRawRequest('post', 'users/currency', {phone_number: userPhone});
  }
}
