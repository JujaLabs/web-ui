import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UserDetails} from '../model/gamification/userDetails';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GamificationService {
  private url = '/api/v1/gamification/users/pointSum';
  private urlUserDetails = '/api/v1/gamification/users/achievementDetails';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private extractData(res: Response): Array<any> {
    const body = res.json();
    return body || {};
  }

  getPointSumForAllUsers(): Observable<any> {
    const options = new RequestOptions({headers: this.headers});
    return this.http.get(this.url, options)
        .map(this.extractData)
        .catch((error: any) => {return Observable.throw(error); });
  }

  getUserDetails(uuid: string): Observable<UserDetails> {
    const request = '{\"toIds\":[\"' + uuid + '\"]}';
    const options = new RequestOptions({headers: this.headers});
    return (this.http.post(this.urlUserDetails, request, options)
        .map(this.extractData)
        .catch((error: any) => {return Observable.throw(error); }));
  }
}
