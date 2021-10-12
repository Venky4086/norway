import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.page.html',
  styleUrls: ['./addcart.page.scss'],
})
export class AddcartPage implements OnInit {
  mycart =true;
  constructor() { }

  ngOnInit() {
  }
  Remove(){
    this.mycart = false;
  }
}
