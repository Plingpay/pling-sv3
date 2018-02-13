import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactConfirmPage } from './contact-confirm';

@NgModule({
  declarations: [
    ContactConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactConfirmPage),
  ],
})
export class ContactConfirmPageModule {}
