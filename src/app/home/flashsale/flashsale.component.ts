import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-flashsale',
  templateUrl: './flashsale.component.html',
  styleUrls: ['./flashsale.component.scss'],
})
export class FlashsaleComponent implements OnInit {

  constructor(private route:Router) { }
    
  ngOnInit() {}
  productdetails(){
    // sessionStorage.setItem('url',this.route.url['/home']);
    this.route.navigate(['/productdetails']);
  }
}
