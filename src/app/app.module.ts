import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonRouterOutlet } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { DataserviceService } from './services/dataservice.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AddressPageModule } from './address/address.module';
import { NorwayService } from './services/norway.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/app'
import 'firebase/auth';
import { environment } from 'src/environments/environment';
// import * as firebase from 'firebase';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AddressPageModule,FormsModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
      // StatusBar,
      // SplashScreen,
      NorwayService,
      PhotoViewer,
      Camera,
      VideoPlayer,
      File,
      LocationAccuracy,
      DataserviceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
