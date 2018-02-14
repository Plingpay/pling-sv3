import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestSubmitPage } from './request-submit';

@NgModule({
  declarations: [
    RequestSubmitPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestSubmitPage),
  ],
})
export class RequestSubmitPageModule {}
