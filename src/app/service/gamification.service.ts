import {Injectable}                    from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GamificationService{

  url: string = 'http://gamification.juja.com.ua/user/pointSum';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){ }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getPointSumForAllUsers() {
    let options = new RequestOptions({headers: this.headers});
    return this.http.get(this.url, options).map(this.extractData);
  }
}
