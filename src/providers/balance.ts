import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class BalanceProvider extends BaseProvider {
  balances() {
    return this._http.get(this.API + "balances", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }
}
