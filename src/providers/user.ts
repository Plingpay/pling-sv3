import {Injectable} from '@angular/core';
import {
  Response
} from '@angular/http';


import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {BaseProvider} from "./baseProvider";

@Injectable()
export class UserProvider extends BaseProvider {

  userAuth(data) {
    return this._http.post(this.API + "login", data, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  registerPhone(data) {
    return this._http.post(this.API + "signup_phone", data, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

}
