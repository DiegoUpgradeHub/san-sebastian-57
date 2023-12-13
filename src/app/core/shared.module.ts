import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//i18n
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //in18
    TranslateModule,

  ],
  exports: [

  ]
})
export class SharedModule { }
