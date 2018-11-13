import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the YtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyBsJ-HGJzK7CWbA2JAqiqe50Il3rFBPpWg';

  constructor(public http: Http) {
    
  }
  getVideo(search){
     return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + search + '&part=snippet,id&maxResults=20')
    .map((res)=>{
      return res.json()['items'];
    })
  }

}
