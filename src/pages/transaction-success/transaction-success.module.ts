import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionSuccessPage } from './transaction-success';

@NgModule({
  declarations: [
    TransactionSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionSuccessPage),
  ],
})
export class TransactionSuccessPageModule {}
