import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LoginPageModule} from "../pages/login/login.module";
import {UserProvider} from "../providers/user";
import {HttpModule} from "@angular/http";
import {RegisterPhonePageModule} from "../pages/register-phone/register-phone.module";
import {RegisterCodePageModule} from "../pages/register-code/register-code.module";
import {TermsAndConditionsPageModule} from "../pages/terms-and-conditions/terms-and-conditions.module";
import {ExchangeRatesPageModule} from "../pages/exchange-rates/exchange-rates.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    RegisterPhonePageModule,
    RegisterCodePageModule,
    TermsAndConditionsPageModule,
    ExchangeRatesPageModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
