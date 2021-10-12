import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public dualRange = { lower: 0, upper: 100 };
  constructor(private route:Router) { }

  ngOnInit() {
  }
  shipping(){
    this.route.navigate(['/shipping']);
  }
}
