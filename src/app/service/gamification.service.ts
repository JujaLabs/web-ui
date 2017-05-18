import {Injectable}                    from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UserDetails} from "../model/userDetails";

@Injectable()
export class GamificationService{

  //private url: string = 'http://gamification.juja.com.ua/user/pointSum';
  private url: string = 'api/userActivity';
  private urlUserDetails: string = 'http://gamification.juja.com.ua/user/achieveDetails';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){ }

  private extractData(res: Response): Array<any> {
    let body = res.json();
    return body.data || {};
  }

  getPointSumForAllUsers(): Observable<any> {
    let options = new RequestOptions({headers: this.headers});
    return this.http.get(this.url, options).map(this.extractData);
  }

  getUserDetails(uuid: string): Observable<UserDetails> {
    let request = "{\"toIds\":[\""+uuid+"\"]}";
    let options = new RequestOptions({headers: this.headers});
    return (this.http.post(this.urlUserDetails, request, options)
        .map(res => res.json() || {}));
  }
}
