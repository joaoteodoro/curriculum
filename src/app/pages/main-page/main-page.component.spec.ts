import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { informations } from 'src/database/informations.database';
import { CurriculumService } from 'src/services/curriculum.service';

import { MainPageComponent } from './main-page.component';

class CurriculumServiceMock extends CurriculumService {
  findByLocale(locale: any) {
    return informations[0].informations;
  }
}

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    const curriculumService = { findByLocale: of() }

    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: CurriculumService, useClass: CurriculumServiceMock },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
