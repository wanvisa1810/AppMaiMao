import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
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
    console.log('ionViewDidLoad StatusPage');
  }
  //showStatus(id)
  //{
  //  this.navCtrl.push(StatusPage,{bkId :id});
  //}

}
