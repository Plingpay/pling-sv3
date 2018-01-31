import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()

export class CurrencyProvider extends BaseProvider {
  currencyList() {
    return this.makeRawRequest('get', 'currency');
  }

  currencyRate(currency) {
    return this._http.post(this.API + "currency", {currency: currency}, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }
}
