import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {UserProvider} from "../providers/user";
import {HttpModule} from "@angular/http";
import {BaseSingleton} from "../services/base";
import {LoginPage} from "../pages/login/login";
import {RegisterPhonePage} from "../pages/register-phone/register-phone";
import {InputMask} from "../directives/input-mask";
import {RegisterCodePage} from "../pages/register-code/register-code";
import {TermsAndConditionsPage} from "../pages/terms-and-conditions/terms-and-conditions";
import {ExchangeRatesPage} from "../pages/exchange-rates/exchange-rates";
import {CountryPhoneSelectorPage} from "../pages/country-phone-selector/country-phone-selector";
import {CreatePasswordPage} from "../pages/create-password/create-password";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {CountrySelectorComponent} from "../components/country-selector/country-selector";

@NgModule({
  declarations: [
    MyApp,
    InputMask,
    LoginPage,
    RegisterPhonePage,
    RegisterCodePage,
    TermsAndConditionsPage,
    ExchangeRatesPage,
    CountryPhoneSelectorPage,
    CreatePasswordPage,
    ForgotPasswordPage,
    CountrySelectorComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPhonePage,
    RegisterCodePage,
    TermsAndConditionsPage,
    ExchangeRatesPage,
    CountryPhoneSelectorPage,
    CreatePasswordPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,
    BaseSingleton,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
