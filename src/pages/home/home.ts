import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  login(){
    console.log("This worked right");
    this.navCtrl.setRoot( MainPage );
  }

  register(){
    console.log("And this is register");
  }

}
