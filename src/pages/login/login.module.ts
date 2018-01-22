import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {InputMask} from "../../directives/input-mask";

@NgModule({
  declarations: [
    LoginPage,
    InputMask
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
