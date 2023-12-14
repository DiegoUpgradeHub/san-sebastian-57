import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisoLegalRoutingModule } from './aviso-legal-routing.module';

import { SharedModule } from 'src/app/core/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvisoLegalRoutingModule,
    SharedModule
  ]
})
export class AvisoLegalModule { }
