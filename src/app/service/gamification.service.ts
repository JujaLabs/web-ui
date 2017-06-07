import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UserDetails} from '../model/userDetails';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GamificationService {

  // private url: string = 'http://gamification.juja.com.ua/user/pointSum';
  // private url = 'api/userActivity';
  // private urlUserDetails = 'http://gamification.juja.com.ua/user/achieveDetails';
  private url = '/api/gamification/user/pointSum';
  private urlUserDetails = '/api/gamification/user/achieveDetails';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private extractData(res: Response): Array<any> {
    const body = res.json();
    return body || {};
  }
  private extractData2(res: Response): Array<any> {
    const body = res.json();
    console.log(body);
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
        .map(this.extractData2)
        .catch((error: any) => {return Observable.throw(error); }));
  }
}
