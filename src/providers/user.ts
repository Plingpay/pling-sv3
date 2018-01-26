import {Injectable} from '@angular/core';
import {
  Response
} from '@angular/http';


import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {BaseProvider} from "./baseProvider";
import {ENV} from "@environment";

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

  resetPassword(data) {
    return this._http.post(this.API + "resset_password", data, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  registerSmsSignup(token, id) {
    return this._http.put(this.API + "signup_sms/" + id, {token: token}, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  registerSmsReset(token, id) {
    return this._http.post(this.API + "resset_password_sms", {token: token, user_id: id}, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  signupPassword(password, id) {
    return this._http.put(this.API + "signup_password/" + id, {password: password}, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  changePassword(password, url) {
    return this._http.post(ENV.API + url, {new_password: password}, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  registerSmsSignin(token, id) {
    return this._http.put(this.API + "login_sms/" + id, {token: token}, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  repeatSms(data) {
    return this._http.post(this.API + "repeat_sms", data, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  termsAndConditions() {
    return this._http.get(this.API + "policy", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  currencyList() {
    return this._http.get(this.API + "currency", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  currencyRate(currency) {
    return this._http.post(this.API + "currency", {currency: currency}, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  countries() {
    return this._http.get(this.API + "countries", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  status() {
    return this._http.get(this.API + "login_status", this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

  verifyEmailAndName(data, id) {
    return this._http.put(this.API + "verify_account/" + id, data, this.generateRequestOptions())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error))
  }

}
