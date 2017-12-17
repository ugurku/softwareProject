import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InterestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interest-detail',
  templateUrl: 'interest-detail.html',
})
export class InterestDetailPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestDetailPage');
  }

}
