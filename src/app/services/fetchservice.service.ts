import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {
  private apiUrl = 'https://star-butter-weaver.glitch.me/districts';
  private http=inject(HttpClient)
  constructor(){ }
  async getdistricts(){
    return this.http.get(this.apiUrl);

}
}
