import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StatusPage } from '../status/status';

import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';


//import { HttpClient } from '@angular/common/http';
//import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AddbookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbooking',
  templateUrl: 'addbooking.html',
})
export class AddbookingPage {
  addbooking = {
    bkId:"",
    bkPerson:"",
    bkDate:"",
    bktTime:"",
    bkName:""
  }
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private http: HttpClient, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbookingPage');
  }

  addBooking(){
    let url="http://localhost:8080/addbooking";
    console.log(this.addbooking);
    this.http.post(url, this.addbooking)
      .subscribe(
        res=>{
            this.data = res;
            if(this.data.msg==true){
              this.showAlert("Success","บันทึกการจอง");
              this.navCtrl.push(StatusPage);
          }
        }
      ); 
  }
  showAlert(msgTitle:string,message:string){
    const alert = this.alertCtrl.create({
     title: msgTitle,
      subTitle: message,
      buttons: ["OK"]
    });
   alert.present();
 }
}
