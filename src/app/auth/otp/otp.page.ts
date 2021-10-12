import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NorwayService } from 'src/app/services/norway.service';
import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  // otpverifiy: FormGroup;
  message: any;
  otp: any;
  error = "Otp number is required";
  status: any;
  confirmationResult: firebase.auth.ConfirmationResult;
  recaptchaVerifier;
  constructor(private route:Router, private toast:ToastController, private norwayservice:NorwayService, private fb:FormBuilder) { }

  ngOnInit() {
    // firebase.initializeApp(environment.firebaseConfig)
    // this.otpverifiy = this.fb.group({
    //  one:['', Validators],
    //  two:[''],
    //  three:[''],
    //  four:['']
    // })
  }
  moveFocus(nextElement) {
    nextElement.setFocus();
  }
  // async OTPverification(a:any,b:any,c:any,d:any){
  //   this.otp = a + b + c + d;
  // if(this.otp == 0){
  //   const toast = await this.toast.create({
  //     message: this.error,
  //     duration: 2000,
  //     position: 'top',
  //     color:'danger'
  //   });
  //   toast.present();
  //   this.route.navigate(['/otp']);
  // }
  // else{
  //   const data = {
  //     phone: sessionStorage.getItem('phone'),
  //     otp : this.otp,
  //   }
  //   // console.log(data);
  //   this.norwayservice.verifiyotp(data).subscribe(async (res)=>{
  //     console.log(res);
  //     this.message = res.message;
  //     sessionStorage.setItem('name',res.data.name);
  //     sessionStorage.setItem('email',res.data.email);
  //     sessionStorage.setItem('address',res.data.address);
  //     this.status = res.data.status;
  //     console.log(this.status);
  //     if(this.status == 0){
  //       const toast = await this.toast.create({
  //         message: this.message,
  //         duration: 2000,
  //         position: 'top',
  //         color:'success'
  //       });
  //       toast.present();
  //       this.route.navigate(['/singup']);
  //     }
  //     else if(this.status == 1){
  //       const toast = await this.toast.create({
  //         message: this.message,
  //         duration: 2000,
  //         position: 'top',
  //         color:'success'
  //       });
  //       toast.present();
  //       this.route.navigate(['/tabs']);
  //     }
  //     else{
  //       const toast = await this.toast.create({
  //         message: this.message,
  //         duration: 2000,
  //         position: 'top',
  //         color:'danger'
  //       });
  //       toast.present();
  //       this.route.navigate(['/otp']);
  //     }
  //   })
  // }
  // }
  verifyOTP(a:any,b:any,c:any,d:any,e:any,f:any) {
    this.otp = a + b + c + d + e + f;
    console.log(this.otp);
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
    this.confirmationResult.confirm(this.otp).then((data) => {
      console.log(data);
    alert("Success"); 
    this.route.navigate(['/singup']);
    }).catch(err => {
    alert(err);
    this.route.navigate(['/otp']);
    })
  }    
}
