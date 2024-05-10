import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://activepieces.qu1ckai.com/api/v1/webhooks/MqYzUCkhIFlyEiJ5Ge225/sync'

  constructor(private httpClient:HttpClient) {
   }

   createPost(data: any){
    return this.httpClient.post(this.url, data);
   }
}
