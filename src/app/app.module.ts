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
import {HomePage} from "../pages/home/home";
import {VerifyAccountPage} from "../pages/verify-account/verify-account";
import {DocumentsPage} from "../pages/documents/documents";
import {DocumentsProvider} from "../providers/documents";
import {LoadingPage} from "../pages/loading/loading";
import {BalanceProvider} from "../providers/balance";
import {TransactionsProvider} from "../providers/transactions";
import {MomentModule} from "angular2-moment";

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
    CountrySelectorComponent,
    HomePage,
    VerifyAccountPage,
    DocumentsPage,
    LoadingPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
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
    ForgotPasswordPage,
    HomePage,
    VerifyAccountPage,
    DocumentsPage,
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,
    DocumentsProvider,
    BalanceProvider,
    TransactionsProvider,
    BaseSingleton,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
