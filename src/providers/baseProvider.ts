import { Injectable } from "@angular/core";
import {ENV} from "@environment";
import {Observable} from "rxjs/Rx";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Events} from "ionic-angular";
@Injectable()

export class BaseProvider {
  public envVars = ENV;
  public API: string = ENV.API + '/api/';

  private show403Error: boolean;

  constructor(private events: Events,
              public http: HttpClient
              ) {
    events.subscribe('403:hide', () => {
      this.show403Error = false;
    });
  }


  private reqOptions() {
    return {
      headers: new HttpHeaders()
        .set('Accept', 'application/json'),
      withCredentials: true
    }
  }

  private _catchRequestError(error: HttpErrorResponse, source: string): void {
    this.events.publish('loading:hide');
    if (source === 'hideError') return;
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
    if (!this.show403Error) {
      this.show403Error = true;
      this.events.publish('403:show');
    }
  }

  protected makeRawRequest(method: any, path: String, data: object = {}, source: string = ''): Promise<any> {
    this.events.publish('loading:show');
    let finalPath = (path.indexOf('http') !== -1) ? path : this.API + path;
    let action = (method === 'get')?this.http[method](finalPath, this.reqOptions())
                                    :this.http[method](finalPath, data, this.reqOptions());
    return action
      .do((res: any) => {this._catchRequestResult(res)})
      .catch((error: any) => Observable.throw(this._catchRequestError(error, source)))
      .toPromise()
  }

}
