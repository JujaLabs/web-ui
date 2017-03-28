import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Person} from './person';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService{

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){ }

  getData(): Promise<Person[]> {
    let options = new RequestOptions({headers: this.headers});
    return this.http.get('http://gamification.juja.com.ua/user/pointSum', options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
