import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  customer:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let customerID=this.navParams.get('customerID');
    let url = "http://localhost:8080/customer/" + customerID;
    console.log(url);
    this.http.get(url)
    .map(res=>res.json())
    .subscribe(data => {
      this.customer = data;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
