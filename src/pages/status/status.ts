import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import{ Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EditaddbookingPage } from '../editaddbooking/editaddbooking';


/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  addbooking:any=0;
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,private alertCtrl:AlertController) {
    //let bkId=this.navParams.get('bkId');
    let url = "http://localhost:8080/addbooking";
    console.log(url);
    this.http.get(url)
    .map(res=>res.json())
    .subscribe(data => {
      this.addbooking = data;
    });
    this.getData();
  }
  ionViewWillEnter(){
    this.getData();
  }
  
  editaddbooking(id)
  {
    this.navCtrl.push(EditaddbookingPage,{addbooking :id});
  }
  getData(){
    this.http.get('http://localhost:8080/addbooking')
    .map(res => res.json()).subscribe(data => {this.addbooking= data});
  }
  deleteaddbooking(bkId){
    this.alertCtrl.create({
      title:"ยืนยัน", subTitle:"ลบข้อมูลจองโต๊ะ",buttons:[
        { 
          text: "Yes",
          handler:()=>{
            let url ="http://localhost:8080/addbooking/"+bkId;
            this.http.delete(url)
              .subscribe(res=>{
                this.data=res;
                console.log(this.data);
                  this.showAlert("สำเร็จ", "ลบข้อมูลการจองโต๊ะแล้ว");
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
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad StatusPage');
  //}


