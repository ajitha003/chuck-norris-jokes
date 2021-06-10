import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor(private http:HttpClient) { }

  Get(url:string){
    return this.http.get(url);
  }
}
