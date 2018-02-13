import {Component, ElementRef, EventEmitter, Input, Output, Renderer} from '@angular/core';
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
  @Output() onCountriesLoaded = new EventEmitter();
  @Input('inputModel') inputModel: string;
  @Input('inputLabel') inputLabel: string = 'Phone';
  @Input('inputFlag') imagePath: string;
  @Input('inputCode') selectedCode: string;

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
          this.onCountriesLoaded.emit({data: this.countries});
          this.imagePath = this.userProvider.envVars.API + data.results[0].flag_image;
          this.selectedCode = data.results[0].phone_code;
          this.triggerInputEvent();
        },
        (err) => {})
  }

  openCodesSelector() {
    let countryModal = this.modalCtrl.create(CountryPhoneSelectorPage, {countries: this.countries});
    countryModal.onDidDismiss(data => {
      if (data) {
        this.selectedCode = data.phone_code;
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
    let phoneStriped;
    if (this.inputModel) {phoneStriped = this.inputModel.replace(/\D/g,'')}
    let codeStriped = this.selectedCode.replace(/\D/g,'');
    this.onSelect.emit({data: '+' + codeStriped + phoneStriped});
  }


}
