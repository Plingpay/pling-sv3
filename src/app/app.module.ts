import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {UserProvider} from "../providers/user";
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
import {ChoosePaymentMethodPage} from "../pages/choose-payment-method/choose-payment-method";
import {AddCardPage} from "../pages/add-card/add-card";
import {HttpClientModule} from "@angular/common/http";
import {CurrencyProvider} from "../providers/currency";
import {ErrorPage} from "../pages/error/error";
import {ContactListPage} from "../pages/contact-list/contact-list";
import {Contacts} from "@ionic-native/contacts";
import {AmountPage} from "../pages/amount/amount";
import {TransactionSubmitPage} from "../pages/transaction-submit/transaction-submit";
import {Keyboard} from "@ionic-native/keyboard";
import {ContactConfirmPage} from "../pages/contact-confirm/contact-confirm";
import {ProfilePage} from "../pages/profile/profile";
import {TransactionSuccessPage} from "../pages/transaction-success/transaction-success";
import {RequestSubmitPage} from "../pages/request-submit/request-submit";
import {PaymentRequestsProvider} from "../providers/paymentRequests";
import {TransactionSubmitManualPage} from "../pages/transaction-submit-manual/transaction-submit-manual";

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
    ChoosePaymentMethodPage,
    AddCardPage,
    ErrorPage,
    ContactListPage,
    AmountPage,
    TransactionSubmitPage,
    TransactionSubmitManualPage,
    ContactConfirmPage,
    ProfilePage,
    TransactionSuccessPage,
    RequestSubmitPage
  ],
  imports: [
    BrowserModule,
    MomentModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
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
    LoadingPage,
    ChoosePaymentMethodPage,
    AddCardPage,
    ErrorPage,
    ContactListPage,
    AmountPage,
    TransactionSubmitPage,
    TransactionSubmitManualPage,
    ContactConfirmPage,
    ProfilePage,
    TransactionSuccessPage,
    RequestSubmitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,
    DocumentsProvider,
    BalanceProvider,
    TransactionsProvider,
    BaseSingleton,
    CurrencyProvider,
    PaymentRequestsProvider,
    Contacts,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
