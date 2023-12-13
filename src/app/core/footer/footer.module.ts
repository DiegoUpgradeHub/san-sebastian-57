import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';

import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterRoutingModule,
    SharedModule
  ]
})
export class FooterModule { }
