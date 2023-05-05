import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject = new BehaviorSubject<string>('en');

  language$ = this.languageSubject.asObservable();

  setLanguage(language: string){
    this.languageSubject.next(language);
  }

  constructor() { }
}
