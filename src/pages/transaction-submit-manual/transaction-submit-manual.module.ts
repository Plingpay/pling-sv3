import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionSubmitManualPage } from './transaction-submit-manual';

@NgModule({
  declarations: [
    TransactionSubmitManualPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionSubmitManualPage),
  ],
})
export class TransactionSubmitManualPageModule {}
