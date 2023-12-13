import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//i18n
import { TranslateModule } from '@ngx-translate/core';

//Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from '../pages/home/home.component'
import { GalleryComponent } from '../pages/gallery/gallery.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent
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
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent
  ]
})
export class SharedModule { }
