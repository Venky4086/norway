import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myoders',
  templateUrl: './myoders.page.html',
  styleUrls: ['./myoders.page.scss'],
})
export class MyodersPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  orderdetails(){
   this.route.navigate(['/order-details']);
  }
}
