import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()
export class BalanceProvider extends BaseProvider {
  balances() {
    return this.makeRawRequest('get', 'balances');
  }
}
