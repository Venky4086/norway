import { Component, OnInit } from '@angular/core';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Plugins } from '@capacitor/core';
import { NorwayService } from './services/norway.service';
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    {provide:IonRouterOutlet}
  ]
})
export class AppComponent implements OnInit{
  ngOnInit(){
  
  }
  get name(){
    return sessionStorage.getItem('name');
  }
  get email(){
    return sessionStorage.getItem('email');
  }
  get address(){
    return sessionStorage.getItem('address');
  }
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  croppedImagePath: string;

  constructor(private menu: MenuController,private camera: Camera,
  public actionSheetController: ActionSheetController,private file: File,
  private photoViewer: PhotoViewer ,  private platform: Platform,
  private routerOutlet: IonRouterOutlet, private norwayservice: NorwayService
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });

   }
 edit(username:any,useremail:any,useraddress:any){
   const data = {
     phone:sessionStorage.getItem('phone'),
     name : username,
     email : useremail,
     address :useraddress,
   }
  //  this.norwayservice.singup(data).subscribe((res)=>{
  //    console.log(res);
  //  })
 }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Shop by Categories', url: '/categories', modal: true, icon: 'apps-outline' },
    // { title: 'Settings', url: '/settings', icon: 'settings-outline' },
    { title: 'Shipping', url: '/order-details', icon: 'cart' },
    { title: 'Order History', url: '/myoders', icon: 'list-outline' },
    { title: 'Wish Cash', url: '/wishcash', icon: 'wallet' },
    { title: 'Rewards', url: '/rewards', icon: 'trophy' },
    // { title: 'Apply Promo', url: '/applypromo', icon: 'megaphone' }
  ];
  public appPages1 = [
    { title: 'CONTACT US', url: '/contact', },
    { title: 'FAQs', url: '/faqs', },
    { title: 'HELP CENTER', url: '/helpcenter',},
    { title: 'PRIVACY POLICY', url: '/privacy',},
  ];

// camer plugin

pickImage(sourceType) {
  const options: CameraOptions = {
    quality: 100,
    sourceType: sourceType,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    this.croppedImagePath = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    // Handle error
  });
 this.photoViewer.show('https://mysite.com/path/to/image.jpg');
}
 
// actionsheet

async selectImage() {
  const actionSheet = await this.actionSheetController.create({
    header: "Select Image source",
    buttons: [{
      text: 'Library',
      handler: () => {
        this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
      }
    },
    {
      text: 'Camera',
      handler: () => {
        this.pickImage(this.camera.PictureSourceType.CAMERA);
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
    }
    ]
  });
  await actionSheet.present();
}

// photo viewer
photoviewer(){
this.photoViewer.show('https://mysite.com/path/to/image.jpg');
this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});

this.photoViewer.show('https://mysecuresite.com/path/to/image.jpg', 'My image title', {share: false, headers: '{username:foo,password:bar}'});
}



}
