import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup, Validators , AbstractControl, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NorwayService } from 'src/app/services/norway.service';

import { AngularFireAuth } from "@angular/fire/auth";

import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';
import firebase from 'firebase/app'
import 'firebase/auth';
import { environment } from 'src/environments/environment';
import { flatten } from '@angular/compiler';
// import { auth } from 'firebase/app'; 
@Component({
  selector: 'app-singin',
  templateUrl: './singin.page.html',
  styleUrls: ['./singin.page.scss'],
})
export class SinginPage implements OnInit {
 mobileOTP:FormGroup;
 OTPno:FormGroup;
 submitted:boolean;
  FormData: any;
  message: any;
  mobile :any;
  otpSent: boolean = false; //OTP sent status
  windowRef: any;
  recaptchaVerifier;
  confirmationResult: firebase.auth.ConfirmationResult
  otp: any;
  mobileno = true;
  otpno:boolean;
  constructor(private fb:FormBuilder, private route:Router, private toast:ToastController,private norwayservice:NorwayService,private af:AngularFireAuth) { }
  
  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig)
    this.mobileOTP = this.fb.group({
       country_code : new FormControl('', Validators.required),
       mobile : new FormControl('', [Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    })
    this.OTPno = this.fb.group({
      otp : new FormControl('', Validators.required),
    })
  }
  get f(){
    return this.mobileOTP.controls
  }
  get o(){
    return this.OTPno.controls
  }
   getotp(){
    this.submitted=true;
    if(this.mobileOTP.invalid){
      return
    }
  else{
    this.mobile = this.mobileOTP.get('country_code').value + this.mobileOTP.get('mobile').value
    console.log(this.mobile);
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
    firebase.auth().signInWithPhoneNumber(this.mobile,this.recaptchaVerifier).then(async result => {
      console.log(result);
      this.confirmationResult = result;
      const toast = await this.toast.create({
                message: 'Successfully otp send to the your phone',
                duration: 3000,
                position: 'top',
                color:''
              });
         toast.present();
         this.mobileno = false;
         this.otpno = true;
      }).catch(async err => {
        const toast = await this.toast.create({
                  message: err,
                  duration: 3000,
                  position: 'top',
                  color:'danger'
                });
        toast.present();
      })
     }
      }
      verifyOTP() {
        this.submitted=true;
        if(this.OTPno.invalid){
          return
        }
        this.otp = this.OTPno.get('otp').value;
        console.log(this.otp);
        this.confirmationResult.confirm(this.otp).then(async (data) => {
          console.log(data);
          const toast = await this.toast.create({
            message: 'Successfully otp verification done',
            duration: 3000,
            position: 'top',
            color:''
          });
          toast.present();
         this.route.navigate(['/singup']);
        }).catch(async err => {
          const toast = await this.toast.create({
            message: err,
            duration: 3000,
            position: 'top',
            color:'danger'
          });
        toast.present();
        })
      }    
}

