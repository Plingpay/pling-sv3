import {Injectable} from "@angular/core";
import {HomePage} from "../pages/home/home";

@Injectable()

export class BaseSingleton {
  public paymentOptionsView: any;
  public actionSource: string = HomePage.SOURCE_TRANSACTION;

  constructor() {

  }

}
