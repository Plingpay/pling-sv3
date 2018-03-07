import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseWithdrawalMethodPage } from './choose-withdrawal-method';

@NgModule({
  declarations: [
    ChooseWithdrawalMethodPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseWithdrawalMethodPage),
  ],
})
export class ChooseWithdrawalMethodPageModule {}
