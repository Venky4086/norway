import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { ModalController, MenuController } from '@ionic/angular';
import { FaqPage } from '../faq/faq.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {
  faqs: any;
  questions: Array<string>;
  constructor( private dataService: DataserviceService,private modalController: ModalController, private route:Router, private menuCtrl: MenuController) { 
    this.faqs = this.dataService.faqs;
    this.questions = Object.keys(this.faqs);
  }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
  }

  async open(i, question){
    let modal = await this.modalController.create({
      component: FaqPage,
      componentProps: { value: Object.values(this.faqs)[i], title: question }
    });
    return await modal.present();
  }
}