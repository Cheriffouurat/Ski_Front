import { Injectable } from '@angular/core';
import { Subscription } from './Models/Subscription';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Ski} from "./Models/Ski";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private url = 'http://192.168.1.13:8089/api/';

  constructor(private http: HttpClient) { }
  AddSubscription(Sub: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(this.url +"subscription/add",Sub,{responseType:'text' as 'json'});
  }
  GetSubById(numSub: string): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.url}subscription/get/${numSub}`);
  }
 /* getSubscriptionsByType(typeSubscription: String): Observable<Subscription[]> {
    const url = `${this.url}subscription/all/${typeSubscription}`;
    return this.http.get<Subscription[]>(url);
  }*/
  getSubscriptionsByType(typeSubscription: string): Observable<Subscription[]> {
    const url = `${this.url}subscription/all/${typeSubscription}`;
        return this.http.get<Subscription[]>(url);
}
  getAllSki() {
    return this.http.get<Ski[]>("http://192.168.33.10:8147/api/skier/all");
  }
}
