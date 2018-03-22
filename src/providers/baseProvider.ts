import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Events} from "ionic-angular";
import {EnvVariables} from "../config/env.token";
@Injectable()

export class BaseProvider {
  public API: string = this.envVars.API + '/api/';
  public ENV = this.envVars;

  public static HIDE_LOADING = 'hideLoading';

  constructor(private events: Events,
              @Inject(EnvVariables) public envVars,
              public http: HttpClient
              ) {
  }


  private reqOptions() {
    return {
      headers: new HttpHeaders()
        .set('Accept', 'application/json'),
      withCredentials: true
    }
  }

  private _catchRequestError(error: HttpErrorResponse, source: string): void {
    if (source !== BaseProvider.HIDE_LOADING) this.events.publish('loading:hide');
    if (source === 'hideError') return;
    if (error.status === 0) {
      this.showOfflineError();
      return;
    }
    if (error.status === 500) {
      this.show500();
      return;
    }
    if (error.status === 403) {
      if (source !== 'LoadingEntry') this.show403();
    } else {
      this.events.publish('error:show', 'Error', (('message' in error.error)?error.error.message:error.message));
    }
  }

  private _catchRequestResult(result: HttpResponse<any>): void {
    this.events.publish('loading:hide');
  }

  private show403() {
      this.events.publish('403:show');
  }

  private show500() {
    this.events.publish('500:show');
  }

  private showOfflineError() {
    this.events.publish('offline:show');
  }

  protected makeRawRequest(method: any, path: String, data: object = {}, source: string = ''): Promise<any> {
    if (source !== BaseProvider.HIDE_LOADING) this.events.publish('loading:show');
    let finalPath = (path.indexOf('http') !== -1) ? path : this.API + path;
    let action = (method === 'get')?this.http[method](finalPath, this.reqOptions())
                                    :this.http[method](finalPath, data, this.reqOptions());
    return action
      .do((res: any) => {this._catchRequestResult(res)})
      .catch((error: any) => Observable.throw(this._catchRequestError(error, source)))
      .toPromise()
  }

}
