import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
// import { IonicService } from '../ionic.service';
import { ToastController } from '@ionic/angular';
import { NorwayService } from 'src/app/services/norway.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  SingUp:FormGroup;
  submitted = false;
  FormData: any;
  message: any;
  name = "";
  email = "";
  address = "";
  constructor(private fb:FormBuilder, private route:Router, private toast:ToastController, private norwayservice:NorwayService) { }
  ngOnInit() {
    this.SingUp =  this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required , Validators.email]],
      // psw: ['', Validators.required],
      address: ['', Validators.required],
    })
  }
  get f() {
    return this.SingUp.controls;
  }
   singup(){
    this.submitted=true;
    if(this.SingUp.invalid){
    return false
    }
    else{
    const data = {
     phone: sessionStorage.getItem('phone'),
     name: this.name,
     email: this.email,
     address: this.address
    }
    console.log(data);
      this.norwayservice.singup(data).subscribe(async (res)=>{
        console.log(res);
        this.message = res.message;
        sessionStorage.setItem('name', res.data.name);
        sessionStorage.setItem('email', res.data.email);
        sessionStorage.setItem('address', res.data.address);
        const toast = await this.toast.create({
          message: this.message,
          duration: 2000,
          position: 'top',
          color:'success'
        });
        toast.present();
      })
      this.route.navigate(['/tabs']);
    }
  }
}
