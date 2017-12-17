import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InterestDetailPage} from '../interest-detail/interest-detail';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  items = [
           {name:"Sultanahmet Camii",photo:"https://gezipgordum.com/wp-content/uploads/Ayasofya-M%C3%BCzesi-2.jpg",desc:"This is a great mosque built by someone",type:"point"},
           {name:"Hagia Sophia",photo:"https://gezievreni.com/wp-content/uploads/2017/04/Ayasofya-Camii-Istanbul.jpg",desc:"A very beautiful church built by ancient byzantines",type:"point"},
           {name:"Galata Tower",photo:"http://www.galatakulesi.org/wp-content/uploads/2013/07/galata-5.jpg",desc:"Some tower built for unknown purposes",type:"point"},
           {name:"Athena Concert",photo:"http://akormatik.com/image/album/300/athena-ben-boyleyim-2011.jpg",desc:"Turkish rock group music concert",type:"event"}
          ];
  
  filteredItems = [
           {name:"Sultanahmet Camii",photo:"linkHere",desc:"This is a great mosque built by someone",type:"point"},
           {name:"Hagia Sophia",photo:"linkHere",desc:"A very beautiful church built by ancient byzantines",type:"point"},
           {name:"Galata Tower",photo:"linkHere",desc:"Some tower built for unknown purposes",type:"point"},
           {name:"Athena Concert",photo:"linkHere",desc:"Turkish rock group music concert",type:"event"}
          ];


  filter = {point: true, event: true};                                                                                                            

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  filterFunc(){
    var that = this;
    this.filteredItems = [];
    this.items.forEach(function(item){
      if(that.filter[item.type] == true){//Bad coding ,hard to understand but will work,refactor if possible
        that.filteredItems.push(item);
        console.log(that.filteredItems);
      }
    });
  }

  ionViewDidLoad() {
    console.log(this.items);
  }

  itemSelected(item){
    this.navCtrl.push( InterestDetailPage, {item:item});
  }

}
