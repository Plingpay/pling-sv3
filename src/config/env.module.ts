import { NgModule } from '@angular/core';
import { EnvVariables } from './env.token';
import { devVars } from './config.dev';
import { prodVars } from './config.prod';

declare const process: any; // Typescript compiler will complain without this

export function environmentFactory() {
  return process.env.IONIC_ENV === 'prod' ? prodVars : devVars;
}

@NgModule({
  providers: [
    {
      provide: EnvVariables,
      // useFactory instead of useValue so we can easily add more logic as needed.
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule {}
