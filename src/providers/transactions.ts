import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class TransactionsProvider extends BaseProvider {
  transactions() {
    return this._http.get(this.API + "transactions", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  paymentMethods() {
    return this._http.get(this.API + "payment_methods", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

}
