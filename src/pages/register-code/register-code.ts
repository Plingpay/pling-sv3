import {Component, ElementRef, Renderer} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {CreatePasswordPage} from "../create-password/create-password";
import {HomePage} from "../home/home";

/**
 * Generated class for the RegisterCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-code',
  templateUrl: 'register-code.html',
})
export class RegisterCodePage {
  private registerPhone: string;
  private registerUserID: number;

  private source: String;

  public codeNum1 = '';
  public codeNum2 = '';
  public codeNum3 = '';
  public codeNum4 = '';

  constructor(public navCtrl: NavController,
              private elementRef: ElementRef,
              private renderer: Renderer,
              private user: UserProvider,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
    this.registerPhone = this.navParams.get('phone');
    this.registerUserID = this.navParams.get('user');
    this.source = this.navParams.get('source');
  }

  public selectFirst() {
    this.codeNum1 = '';
    let codeNum1 = this.elementRef.nativeElement.querySelector('#codeNum1>input');
    setTimeout(() => {
      this.renderer.invokeElementMethod(codeNum1, 'focus', []);
    }, 0);
  }

  public selectSecond() {
    this.codeNum2 = '';
    let codeNum2 = this.elementRef.nativeElement.querySelector('#codeNum2>input');
    setTimeout(() => {
      this.renderer.invokeElementMethod(codeNum2, 'focus', []);
    }, 0);
  }

  public selectThird() {
    this.codeNum3 = '';
    let codeNum3 = this.elementRef.nativeElement.querySelector('#codeNum3>input');
    setTimeout(() => {
      this.renderer.invokeElementMethod(codeNum3, 'focus', []);
    }, 0);
  }

  public selectFourth() {
    this.codeNum4 = '';
    let codeNum4 = this.elementRef.nativeElement.querySelector('#codeNum4>input');
    setTimeout(() => {
      this.renderer.invokeElementMethod(codeNum4, 'focus', []);
    }, 0);
  }

  codeInputFirst(event) {
    event.preventDefault();
    let keyIdentifier = '';
    if (event.keyIdentifier) keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
    let key = event.key || keyIdentifier;
    if (/^\d$/.test(key))  {
      this.codeNum1 = key;
      this.selectSecond();
    }

  }

  codeInputSecond(event) {
    event.preventDefault();
    let keyIdentifier = '';
    if (event.keyIdentifier) keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
    let key = event.key || keyIdentifier;
    if (/^\d$/.test(key))  {
      this.codeNum2 = key;
      this.selectThird();
    } else if (((event.key === 'Backspace') || (event.keyIdentifier === 'U+0008')) && (this.codeNum2 === '')) {
      this.selectFirst();
    }
  }

  codeInputThird(event) {
    event.preventDefault();
    let keyIdentifier = '';
    if (event.keyIdentifier) keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
    let key = event.key || keyIdentifier;
    if (/^\d$/.test(key))  {
      this.codeNum3 = key;
      this.selectFourth();
    } else if (((event.key === 'Backspace') || (event.keyIdentifier === 'U+0008')) && (this.codeNum3 === '')) {
      this.selectSecond();
    }
  }

  codeInputFourth(event) {
    event.preventDefault();
    let keyIdentifier = '';
    if (event.keyIdentifier) keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
    let key = event.key || keyIdentifier;
    if (/^\d$/.test(key))  {
      this.codeNum4 = key;
      let submitButton = this.elementRef.nativeElement.querySelector('#submitButton');
      setTimeout(() => {
        this.renderer.invokeElementMethod(submitButton, 'focus', []);
      }, 0);
    } else if ((event.key === 'Backspace') || (event.keyIdentifier === 'U+0008')) {
      this.selectThird();
    }
  }

  registerCode() {
    let action;
    switch (this.source) {
      case 'signup':
        action = this.user.registerSmsSignup("" + this.codeNum1 + this.codeNum2 + this.codeNum3 + this.codeNum4, this.registerUserID);
        break;
      case 'reset':
        action = this.user.registerSmsReset("" + this.codeNum1 + this.codeNum2 + this.codeNum3 + this.codeNum4, this.registerUserID);
        break;
      case 'signin':
        action = this.user.registerSmsSignin("" + this.codeNum1 + this.codeNum2 + this.codeNum3 + this.codeNum4, this.registerUserID);
    }
    action.then((data) => {
          switch (this.source) {
            case 'signup':
              this.navCtrl.push(CreatePasswordPage, {userID: this.registerUserID, source: 'signup'});
              break;
            case 'signin':
              this.navCtrl.setRoot(HomePage);
              this.navCtrl.popToRoot();
              break;
            case 'reset':
              this.navCtrl.push(CreatePasswordPage, {userID: this.registerUserID, url: data.url, source: 'reset'});
          }

        },
        (err) => {})
  }

  retry() {
    let phone_striped = this.registerPhone.replace(/\D/g,'');
    this.user.repeatSms({phone_number: '+' + phone_striped})
      .then((data) => {
          let alert = this.alertCtrl.create({
            title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
            message: 'Please wait for sms',
            buttons: ['GOT IT']
          });
          alert.present();
        },
        (err) => {})
  }

}
