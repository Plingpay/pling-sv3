import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryPhoneSelectorPage } from './country-phone-selector';

@NgModule({
  declarations: [
    CountryPhoneSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(CountryPhoneSelectorPage),
  ],
})
export class CountryPhoneSelectorPageModule {}
