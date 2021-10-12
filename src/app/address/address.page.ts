import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, IonRouterOutlet } from "@ionic/angular";
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  Address:FormGroup;
  submitted = false;
  alphoneno = true;
  alphoneinput = false;
  newaddress: boolean;
  constructor(private fb: FormBuilder,private locationAccuracy: LocationAccuracy, private routerOutlet: IonRouterOutlet,) { }
  ngOnInit() {
    this.Address = this.fb.group({
      arr: this.fb.array([this.createItem()],[Validators.required])
    })
  }
  Alternateph(){
    this.alphoneinput = true;
    this.alphoneno = false;
  }
  addaddress(){
    this.newaddress = !this.newaddress;
  }
  createItem() {
    return this.fb.group({
      firstname: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      street:['', Validators.required],
      pincode:['',[ Validators.required, Validators.pattern("[0-9]{6}$")]],
      houseno:['', Validators.required],
      area:['', Validators.required],
    });
  }
  get f() { return this.Address.controls; }
  get arr() : FormArray {
    return  this.Address.get("arr") as FormArray;
  }
  addItem() {
    this.arr.push(this.createItem());
  }

  removeItem(i: number) {
    this.arr.removeAt(i);
  }

  onSubmit() {
    this.submitted =true;
    if(this.Address.invalid){
      return false;
    }
    else{
    console.log(JSON.stringify(this.Address.value.arr));
    }
  }

location(){
  this.locationAccuracy.canRequest().then((canRequest: boolean) => {

    if(canRequest) {
      // the accuracy option will be ignored by iOS
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => console.log('Request successful'),
        error => console.log('Error requesting location permissions', error)
      );
    }
  
  });
}


}
