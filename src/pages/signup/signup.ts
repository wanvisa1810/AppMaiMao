import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//HttpClient
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  customer = {
    customerID:"",
    customerName:"",
    customerTel:"",
    customerMail:""
  };
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
 // gotoMenu(){
  //  this.navCtrl.push(MenuPage);
  //}
  addCustomer(){
    let url="http://localhost:8080/customer";
    console.log(this.customer);
    this.http.post(url, this.customer)
      .subscribe(
        res=>{
            this.data = res;
            if(this.data.msg==true){
              this.showAlert("สำเร็จ","ข้อมูลถูกบันทึก");
              this.navCtrl.push(MenuPage);
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
