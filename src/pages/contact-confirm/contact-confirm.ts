import {Component, ElementRef, Renderer} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {BaseSingleton} from "../../services/base";

/**
 * Generated class for the ContactConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-confirm',
  templateUrl: 'contact-confirm.html',
})
export class ContactConfirmPage {
  public userPhone: string;
  public userName: string;

  public userPhoneInput: string;
  public selectedCode: string;
  public selectedFlag: string;

  public countriesData: Array<any> = [];

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public viewCtrl: ViewController,
              private elementRef: ElementRef,
              private renderer: Renderer,
              public baseSingleton: BaseSingleton,
              public navParams: NavParams) {
    this.userPhone = this.navParams.get('userPhone');
    this.userName = this.navParams.get('userName');
  }

  ionViewDidLoad() {
  }

  selectCountry(country) {
    this.selectedCode = country.phone_code;
    this.selectedFlag = this.userProvider.envVars.API + country.flag_image;
    let phoneInput = this.elementRef.nativeElement.querySelector('#phoneNativeInput>input');
    setTimeout(() => {
      console.log("elementSelected");
      this.renderer.invokeElementMethod(phoneInput, 'focus', []);
    }, 0);
  }

  confirm() {
    this.baseSingleton.transactionDetails.phoneNumber = this.userPhoneInput;
    this.viewCtrl.dismiss();
  }

}
