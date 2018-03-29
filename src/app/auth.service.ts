import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  let bodyString = JSON.stringify({

  });

fetchData(){
  return this.http.post("https://api.instagram.com/oauth/access_token",this.bodyString,this.options)
  .map((res:Response) => res.json())
  // .then((res:any)=>{console.log(res)})
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
}
