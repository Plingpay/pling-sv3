import {Component, ElementRef, EventEmitter, Output, Renderer} from '@angular/core';
import {CountryPhoneSelectorPage} from "../../pages/country-phone-selector/country-phone-selector";
import { ModalController} from "ionic-angular";
import {UserProvider} from "../../providers/user";

/**
 * Generated class for the CountrySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'country-selector',
  templateUrl: 'country-selector.html'
})
export class CountrySelectorComponent {
  @Output() onSelect = new EventEmitter();
  public inputModel: String;

  public imagePath: String;
  private countries: Array<any>;

  constructor(
    private modalCtrl: ModalController,
    private userProvider: UserProvider,
    private renderer: Renderer,
    private elementRef: ElementRef,

  ) {
    this.userProvider.countries()
      .then((data) => {
          this.countries = data.results;
          this.imagePath = this.userProvider.envVars.API + data.results[0].flag_image;
          this.inputModel = data.results[0].phone_code;
          this.triggerInputEvent();
        },
        (err) => {})
  }

  openCodesSelector() {
    let countryModal = this.modalCtrl.create(CountryPhoneSelectorPage, {countries: this.countries});
    countryModal.onDidDismiss(data => {
      if (data) {
        this.inputModel = data.phone_code;
        this.triggerInputEvent();
        this.imagePath = this.userProvider.envVars.API + data.flag_image;
        let phoneNativeInput = this.elementRef.nativeElement.querySelector('#phoneNativeInput>input');
        setTimeout(() => {
          this.renderer.invokeElementMethod(phoneNativeInput, 'focus', []);
        }, 0);
      }
    });
    countryModal.present();
  }

  triggerInputEvent() {
    let phone_striped = this.inputModel.replace(/\D/g,'');
    this.onSelect.emit({data: '+' + phone_striped});
  }


}
