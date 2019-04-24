import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { SettingPage } from '../setting/setting';
import { DetailsPage } from '../details/details';
import { EditcustomerPage} from '../editcustomer/editcustomer';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
//import { SignupPage } from '../signup/signup';
/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {
  customer:any=0;
  data:any=0;
  constructor(public navCtrl: NavController,public navParam: NavParams, public http: Http,private alertCtrl:AlertController) {
    this.getData();
  }
  showDetails(id)
  {
    this.navCtrl.push(DetailsPage,{customerID:id});
  }
  editcustomer(id)
  {
    this.navCtrl.push(EditcustomerPage,{customerID:id});
  }
  
  //แสดงข้อมูลเมื่อเปิดมาสู่หน้าครั้งแรก
  getData(){
    this.http.get('http://localhost:8080/customer')
    .map(res => res.json()).subscribe(data => {this.customer= data});
  }
  //แสดงข้อมูลเมื่อไปหน้าอื่นแล้วกลับมาสู่หน้า Home

  ionViewWillEnter(){
    this.getData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
  deletecustomer(customerID){
    this.alertCtrl.create({
      title:"ยืนยัน", subTitle:"ข้อมูลของคุณจะถูกลบ",buttons:[
        { 
          text: "Yes",
          handler:()=>{
            let url ="http://localhost:8080/customer/"+customerID;
            this.http.delete(url)
              .subscribe(res=>{
                this.data=res;
                console.log(this.data);
                  this.showAlert("สำเร็จ", "ข้อมูลของคุณถูกลบ");
                  this.getData();
              }); 
          }
        },
        {
          text: "No",
          handler:()=>{}
        }
      ]
    })
      .present();
  }
  showAlert(msgTitle:string, message:string){
    const alert = this.alertCtrl.create({
      title: msgTitle,
      subTitle: message,
      buttons: ["OK"]
    });
    //show alert
    alert.present();
}

}