import { Injectable } from "@angular/core";
import {
  Http, Headers, RequestOptions,
} from '@angular/http';
import {ENV} from "@environment";
import {Observable} from "rxjs/Rx";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Events} from "ionic-angular";
@Injectable()

export class BaseProvider {
  public envVars = ENV;
  public API: string = ENV.API + '/api/';

  private isLoading: boolean;
  private show403Error: boolean;

  constructor(public _http: Http,
              private events: Events,
              public http: HttpClient
              ) {
    events.subscribe('403:hide', () => {
      this.show403Error = false;
    });
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

  private reqOptions() {
    return {
      headers: new HttpHeaders()
        .set('Accept', 'application/json'),
      withCredentials: true
    }
  }

  private _catchRequestError(error: HttpErrorResponse, source: string): void {
    this.hideLoader();
    if (error.status === 403) {
      if (source !== 'LoadingEntry') this.show403();
    } else {
      this.events.publish('error:show', 'Error', ('message' in error.error)?error.error.message:error.message);
    }
  }

  private _catchRequestResult(result: HttpResponse<any>): void {
    this.hideLoader();
  }

  private showLoader() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.events.publish('loading:show');
    }
  }

  private hideLoader() {
    if (this.isLoading) {
      this.isLoading = false;
      this.events.publish('loading:hide');
    }
  }

  private show403() {
    if (!this.show403Error) {
      this.show403Error = true;
      this.events.publish('403:show');
    }
  }

  protected makeRawRequest(method: any, path: String, data: object = {}, source: string = ''): Promise<any> {
    this.showLoader();
    let action = (method === 'get')?this.http[method](this.API + path, this.reqOptions())
                                    :this.http[method](this.API + path, data, this.reqOptions())
    return action
      .do((res: any) => {this._catchRequestResult(res)})
      .catch((error: any) => Observable.throw(this._catchRequestError(error, source)))
      .toPromise()
  }

}
