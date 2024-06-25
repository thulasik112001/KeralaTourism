import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {
  private http=inject(HttpClient)
  constructor(){ }
  async getdistricts(url: string){
    return this.http.get(url);

}
}
