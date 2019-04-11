import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddbookingPage} from '../addbooking/addbooking';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }
  gotoTable(){
    this.navCtrl.push(AddbookingPage);
  }

}
