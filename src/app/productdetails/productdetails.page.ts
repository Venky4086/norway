import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  previous(){
    this.route.navigate(['/home']);
  }
}
