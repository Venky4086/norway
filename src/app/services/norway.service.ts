import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const sendotp = "http://127.0.0.1:8000/api/sendotp";
const verifiyotp = "http://127.0.0.1:8000/api/verifiyotp";
const singup = "http://127.0.0.1:8000/api/singup";
const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
@Injectable({
  providedIn: 'root'
})
export class NorwayService {

get windowRef() {
  return window;
}

  constructor(private http:HttpClient ) { } 

sendotp(formData,): Observable<any>{
  return this.http.post<any>(sendotp,formData, {'headers':headers});
}
verifiyotp(data,): Observable<any>{
  return this.http.post<any>(verifiyotp,data, {'headers':headers});  
}
singup(data): Observable<any>{
  return this.http.post<any>(singup ,data, {'headers':headers});  
}
profileedit(data): Observable<any>{
  return this.http.put<any>(singup ,data, {'headers':headers});  
}
}
