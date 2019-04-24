import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { BookingPage } from '../pages/booking/booking';
import { StatusPage } from '../pages/status/status';
import { SettingPage } from '../pages/setting/setting';
import { AddbookingPage } from '../pages/addbooking/addbooking';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { BookingProvider } from '../providers/booking/booking';
import { HttpModule } from '@angular/http';
//import { HTTP } from '@ionic-native/http';
import { HttpClientModule} from '@angular/common/http';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { EditcustomerPage } from '../pages/editcustomer/editcustomer';
import { EditaddbookingPage } from '../pages/editaddbooking/editaddbooking';
import { DetailsPage } from '../pages/details/details';
import { SettingcustomerPage } from '../pages/settingcustomer/settingcustomer';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    BookingPage,
    StatusPage,
    SettingPage,
    AddbookingPage,
    LoginPage,
    SignupPage,
    EditcustomerPage,
    EditaddbookingPage,
    DetailsPage,
    SettingcustomerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    BookingPage,
    StatusPage,
    SettingPage,
    AddbookingPage,
    LoginPage,
    SignupPage,
    EditcustomerPage ,
    EditaddbookingPage,
    DetailsPage,
    SettingcustomerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
