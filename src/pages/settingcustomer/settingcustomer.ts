import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { EditcustomerPage} from '../editcustomer/editcustomer';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SettingcustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settingcustomer',
  templateUrl: 'settingcustomer.html',
})
export class SettingcustomerPage {
  customer:any=0;
  data:any=0;
  constructor(public navCtrl: NavController,public navParam: NavParams, public http: Http,private alertCtrl:AlertController) {
    this.getData();
  }
  //showDetails(id)
  //{
  //  this.navCtrl.push(DetailsPage,{customerID:id});
 // }
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
    console.log('ionViewDidLoad SettingcustomerPage');
  }
  deletecustomer(customerID){
    this.alertCtrl.create({
      title:"ยืนยัน", subTitle:"ยืนยันการลบข้อมูลของคุณ",buttons:[
        { 
          text: "Yes",
          handler:()=>{
            let url ="http://localhost:8080/customer/"+customerID;
            this.http.delete(url)
              .subscribe(res=>{
                this.data=res;
                console.log(this.data);
                  this.showAlert("เรียบร้อย", "ลบข้อมูลของคุณแล้ว");
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
