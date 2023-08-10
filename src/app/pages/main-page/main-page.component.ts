import { Component, OnInit } from '@angular/core';
import { CurriculumService } from 'src/services/curriculum.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  allContent: any;
  locale: string = 'pt-br';

  constructor(
    private curriculumService: CurriculumService,
  ) { }

  ngOnInit(): void {
    let locale = localStorage.getItem('locale');
    if (!locale) {
      localStorage.setItem('locale', 'en');
      locale = localStorage.getItem('locale');
    }
    this.allContent = this.curriculumService.findByLocale(locale);
  }

  print() {
    window.print();
  }

  changeLanguage(code: string) {
    localStorage.setItem('locale', code);
    window.location.reload();
  }

}
