import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  input='';
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  conversation = [
    { text: 'Hi user, how may I help you?', sender: 0, image: 'assets/images/ntr.jpg' },
    { text: 'I need some coffee, maybe!', sender: 1, image: 'assets/images/user.png' },
    { text: 'I can\'t give you that! Sorry.', sender: 0, image: 'assets/images/ntr.jpg' },
    { text: 'Umm Okay!', sender: 1, image: 'assets/images/user.png'},
    { text: 'Bye!', sender: 0, image: 'assets/images/ntr.jpg' }
  ]
  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
  }
  send(){
    if(this.input!=''){
      this.conversation.push(
        {text: this.input, sender: 1, image:'assets/images/user.png'}
        );
      this.input = '';
    }
  }
}

