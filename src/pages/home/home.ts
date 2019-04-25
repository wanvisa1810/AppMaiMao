import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //gotoMenu(){
  //  this.navCtrl.push(MenuPage);
 // }
  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }
  gotoSignup(){
    this.navCtrl.push(SignupPage);
  }
}
