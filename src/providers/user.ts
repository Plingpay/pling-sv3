import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {BaseProvider} from "./baseProvider";
import {ENV} from "@environment";

@Injectable()
export class UserProvider extends BaseProvider {

  userAuth(data) {
    return this.makeRawRequest('post', 'login', data);
  }

  registerPhone(data) {
    return this.makeRawRequest('post', 'signup_phone', data);
  }

  resetPassword(data) {
    return this.makeRawRequest('post', 'resset_password', data);
  }

  registerSmsSignup(token, id) {
    return this.makeRawRequest('put', 'signup_sms/' + id, {token: token});
  }

  registerSmsReset(token, id) {
    return this.makeRawRequest('post', 'resset_password_sms',  {token: token, user_id: id});
  }

  signupPassword(password, id) {
    return this.makeRawRequest('put', 'signup_password/' + id, {password: password});
  }

  changePassword(password, url) {
    return this.makeRawRequest('post', ENV.API + url, {new_password: password});
  }

  registerSmsSignin(token, id) {
    return this.makeRawRequest('put', 'login_sms/' + id, {token: token});
  }

  repeatSms(data) {
    return this.makeRawRequest('post', 'repeat_sms', data);
  }

  termsAndConditions() {
    return this.makeRawRequest('get', 'policy');
  }

  countries() {
    return this.makeRawRequest('get', 'countries');
  }

  status(source: string = '') {
    return this.makeRawRequest('get', 'login_status', {}, source);
  }

  verifyEmailAndName(data, id) {
    return this.makeRawRequest('put', 'verify_account/' + id, data);
  }

  logout() {
    return this.makeRawRequest('get', 'logout');
  }

  profile() {
    return this.makeRawRequest('get', 'profile');
  }

  saveProfile(data) {
    let formData: FormData = new FormData();
    if (data.photo instanceof File) formData.append('photo', data.image, data.image.name);
    formData.append('withdraw_type', data.withdraw_type);
    formData.append('currency', data.currency);
    return this.makeRawRequest('post', 'profile/change', formData)
  }

}
