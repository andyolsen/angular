import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nPluralPipeComponent } from './i18n-plural-pipe.component';

describe('I18nPluralPipeComponent', () => {
  let component: I18nPluralPipeComponent;
  let fixture: ComponentFixture<I18nPluralPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I18nPluralPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(I18nPluralPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
