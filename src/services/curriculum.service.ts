import { Injectable } from '@angular/core';
import { informations } from 'src/database/informations.database';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor() { }

  findByLocale(locale: any): any {
    return informations.find(item => (item.language == locale))?.informations;
  }
}
