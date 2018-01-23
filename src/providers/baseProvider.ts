import { Injectable } from "@angular/core";
import {
  Http, Headers, RequestOptions
} from '@angular/http';
import {ENV} from "@environment";
@Injectable()

export class BaseProvider {
  API: string = ENV.API + '/api/';

  constructor(public _http:Http) {
  }

  protected generateRequestOptions() {
    let _headers: Headers;
    let _options: RequestOptions;
    _headers = new Headers({
      'Accept': 'application/json'
    });
    _options = new RequestOptions({
      headers: _headers,
      withCredentials: true
    });
    return _options;
  }
}
