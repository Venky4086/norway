import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {
  privacy_policy:any;
  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    this.privacy_policy = this.dataservice.privacy_policy;
  }

}
