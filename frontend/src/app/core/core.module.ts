import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccessTokenService} from "./access-token.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    AccessTokenService
  ]
})
export class CoreModule { }
