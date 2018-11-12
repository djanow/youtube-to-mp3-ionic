import { YtProvider } from './../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import {DomSanitizer} from '@angular/platform-browser';
 
@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  video: Observable<any[]>;
 
  constructor(private navParams: NavParams, private ytProvider: YtProvider, private youtube: YoutubeVideoPlayer, private plt: Platform, private sanitizer:DomSanitizer) {
    this.sanitizer = sanitizer; 
    let video = this.navParams.get('video');
    console.log("video "+JSON.stringify(video));
    this.video = video;
  }
 
  openVideo(video) {
    if (this.plt.is('cordova')) {
      this.youtube.openVideo(video.snippet.resourceId.videoId);
    } else {
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
  }
  downloadFrameLink(id){
    console.log("id "+id);
    let tmp = 'https://www.yt2mp3s.me/@api/button/mp3/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(tmp);
  }
}