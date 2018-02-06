import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionSubmitPage } from './transaction-submit';

@NgModule({
  declarations: [
    TransactionSubmitPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionSubmitPage),
  ],
})
export class TransactionSubmitPageModule {}
