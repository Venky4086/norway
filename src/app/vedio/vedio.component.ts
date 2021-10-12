import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
@Component({
  selector: 'app-vedio',
  templateUrl: './vedio.component.html',
  styleUrls: ['./vedio.component.scss'],
})
export class VedioComponent implements OnInit {
  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {}
  
  // Playing a video.
  vedio(){
    this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
   console.log('video completed');
  }).catch(err => {
   console.log(err);
  });
  }

//   public playVideo(){
//     this.videoOpts = {volume : 1.0};
//     this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
//     console.log('video completed');
//     }).catch(err => {
//     console.log(err);
//     });    
// }
// public stopPlayingVideo(){
//     this.videoPlayer.close();
// }

}
