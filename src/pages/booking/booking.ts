import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
//import { DetailaddbookingPage } from '../detailaddbooking/detailaddbooking';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { EditaddbookingPage } from '../editaddbooking/editaddbooking';
import { AddbookingPage } from '../addbooking/addbooking';
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
  addbooking:any=0;
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,private alertCtrl: AlertController) {
    this.getData();
  }

  //ionViewDidLoad() {
   // console.log('ionViewDidLoad BookingPage');
  //}
  //gotoTable(){
    //this.navCtrl.push(AddbookingPage);
  //}
  //showDetailaddbooking(Id)
 // {
 //   this.navCtrl.push(DetailaddbookingPage,{bkId :Id});
 // }
  editaddbooking(Id)
  {
    this.navCtrl.push(EditaddbookingPage,{bkId :Id});
  }
  showaddbooking()
  {
    this.navCtrl.push(AddbookingPage);
  }  
  //แสดงข้อมูลเมื่อเปิดมาสู่หน้าครั้งแรก
  getData(){
    this.http.get('http://localhost:8080/addbooking/')
    .map(res => res.json()).subscribe(data => {this.addbooking= data});
  }
  //แสดงข้อมูลเมื่อไปหน้าอื่นแล้วกลับมาสู่หน้า Home
  ionViewWillEnter(){
    this.getData();
  }
  deleteData(bkId){
    this.alertCtrl.create({
      title:"ยืนยัน", subTitle:"ต้องการลบ",buttons:[
        { 
          text: "Yes",
          handler:()=>{
            let url ="http://localhost:8080/addbooking/"+bkId;
            this.http.delete(url)
              .subscribe(res=>{
                this.data=res;
                console.log(this.data);
                  this.showAlert("สำเร็จ", "ข้อมูลการจองถูกลบ");
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