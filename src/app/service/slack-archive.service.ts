import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {SlackChannel} from "../model/slack-archive/slack-channel";

@Injectable()
export class SlackArchiveService {
  private urlAllChannels = '/api/v1/slack-archive/channels';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private extractData(res: Response): Array<any> {
    const body = res.json();
    return body || {};
  }

  getAllChannels(): Observable<SlackChannel[]> {
    const options = new RequestOptions({headers: this.headers});
    return this.http.get(this.urlAllChannels, options)
      .map(this.extractData)
      .catch((error: any) => {return Observable.throw(error); });
  }
}
