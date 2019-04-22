import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  customer = {
    customerID:"",
    customerName:"",
    customerTel:"",
    customerMail:""
  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController,
     private httpclient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  editcustomer(){
    let customerID=this.navParams.get('customerID');
    let url = "http://localhost:8080/customer/" + customerID;
      console.log(this.customer);
      this.httpclient.post(url, this.customer)
        .subscribe(
          res=>{
              this.data = res;
              if(this.data.msg==true){
                this.showAlert("Success","Data Edit");
                this.navCtrl.popToRoot();
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
  
