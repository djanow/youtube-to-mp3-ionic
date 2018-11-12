import { YtProvider } from './../../providers/yt/yt';
import { Component, Sanitizer } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search=''
  lists: Observable<any[]>;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController, private ytProvider: YtProvider) {
    
  }
  
  searchlists(){
    this.lists = this.ytProvider.getVideo(this.search);
  }
  
  openVideo(list){
    console.log("list "+list);
    this.navCtrl.push('PlaylistPage', {video:list});
  }

}
