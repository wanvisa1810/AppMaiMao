import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { BookingPage } from '../pages/booking/booking';
import { StatusPage } from '../pages/status/status';
import { SettingPage } from '../pages/setting/setting';
import { AddbookingPage } from '../pages/addbooking/addbooking';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BookingProvider } from '../providers/booking/booking';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    BookingPage,
    StatusPage,
    SettingPage,
    AddbookingPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    BookingPage,
    StatusPage,
    SettingPage,
    AddbookingPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookingProvider
  ]
})
export class AppModule {}
