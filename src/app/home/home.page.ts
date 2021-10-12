import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private videoPlayer: VideoPlayer) { }
 
  ngOnInit() {
  }
  // public async vedio(){
  //   this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
  //  console.log('video completed');
  // }).catch(err => {
  //  console.log(err);
  // });
  // }
}
