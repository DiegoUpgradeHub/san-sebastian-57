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
import { BookingComponent } from '../pages/booking/booking.component';
import { TeamComponent } from '../pages/team/team.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { AvisoLegalComponent } from '../pages/aviso-legal/aviso-legal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookingComponent,
    TeamComponent,
    ContactComponent,
    GalleryComponent,
    AvisoLegalComponent
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
    BookingComponent,
    TeamComponent,
    ContactComponent,
    GalleryComponent,
    AvisoLegalComponent
  ]
})
export class SharedModule { }
