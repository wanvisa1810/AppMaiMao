import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EditaddbookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editaddbooking',
  templateUrl: 'editaddbooking.html',
})
export class EditaddbookingPage {
  addbooking = {
    bkId:"",
    bkPerson:"",
    bkDate:"",
    bktTime:"",
    bkName:""
  }
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public http: Http,
    private alertCtrl: AlertController,private httpclient: HttpClient) {
      let bkId=this.navParams.get('bkId');
    let url = "http://localhost:8080/addbooking/" + bkId;
    console.log(url);
    this.http.get(url)
    .map(res=>res.json())
    .subscribe(data => {
      this.addbooking = data;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcustomerPage');

  }
editcustomer(){
  let bkId=this.navParams.get('customerID');
  let url = "http://localhost:8080/customer/" + bkId;
    console.log(this.addbooking);
    this.httpclient.post(url, this.addbooking)
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