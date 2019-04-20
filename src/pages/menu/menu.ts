import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { StatusPage } from '../status/status';
import { SettingPage } from '../setting/setting';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
    gotoBooking(){
      this.navCtrl.push(BookingPage);
  }
    gotoStatus(){
      this.navCtrl.push(StatusPage);
    }
    gotoSetting(){
      this.navCtrl.push(SettingPage);
    }
    gotoContact(){
      this.navCtrl.push(ContactPage);
    }
}
