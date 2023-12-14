import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //LANGUAGES
  //Variables for languages
  currentLanguage: string = '';
  currentLanguageSubscription: Subject<string> = new Subject<string>();
  //Functions for languages
  setCurrentLanguage() {
    this.currentLanguageSubscription.next(this.currentLanguage);
  }

}
