import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {
  public dualRange = { lower: 0, upper: 100 };
  constructor() { }

  ngOnInit() {
  } 
 
}
