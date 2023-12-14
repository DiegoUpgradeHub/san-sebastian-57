import { Component, ChangeDetectorRef } from '@angular/core';

import { AppComponent } from '../../app.component';

import { SharedService } from 'src/app/core/shared.service';
import { TranslateService } from '@ngx-translate/core';

import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  //Variables for language
  currentLanguage!: string;
  currentLanguageSubscribed!: Subscription;

  constructor (
    private sharedService: SharedService,
    public appComponent: AppComponent,
    public translateService: TranslateService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.currentLanguageSubscribed = sharedService.currentLanguageSubscription.subscribe(value => {
      this.currentLanguage = value;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnInit(): void {
    this.detectBrowserLanguage();
  }
  //LANGUAGES FUNCTIONS
  detectBrowserLanguage(){
    const browserLang = this.translateService.getBrowserLang();
    if (browserLang === 'es') {
      this.setSpanish();
    } else if (browserLang === 'de') {
      this.setGerman();
    } else {
      this.setEnglish();
    }
  }
  setEnglish(){
    this.appComponent.setAppLanguageEnglish();
    this.sharedService.currentLanguage = 'en';
    this.sharedService.setCurrentLanguage();
  }
  setSpanish(){
    this.appComponent.setAppLanguageSpanish();
    this.sharedService.currentLanguage = 'es';
    this.sharedService.setCurrentLanguage();
  }
  setGerman(){
    this.appComponent.setAppLanguageGerman();
    this.sharedService.currentLanguage = 'de';
    this.sharedService.setCurrentLanguage();
  }

}
