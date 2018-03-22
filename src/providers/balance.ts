import {Injectable} from "@angular/core";
import {BaseProvider} from "./baseProvider";

@Injectable()
export class BalanceProvider extends BaseProvider {
  balances(source: string = '') {
    return this.makeRawRequest('get', 'balances', {}, source);
  }
}
