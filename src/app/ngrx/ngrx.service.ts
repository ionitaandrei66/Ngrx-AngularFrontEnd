import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthModel} from "./ngrx.state";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NgrxService {

  constructor(private http: HttpClient) {}


  getAuth(): Observable<AuthModel | null> {
    return this.http.get<AuthModel | null>(`${environment.url}/auth/getAuth`);
  }

  registerAuth(data: {username: string, password:string}): Observable<AuthModel | null> {
    return this.http.post<AuthModel | null>(`${environment.url}/auth/register`,
        {username:data?.username,password: data?.password});
  }
 
}
