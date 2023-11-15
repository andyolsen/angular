import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nSelectPipeComponent } from './i18n-select-pipe.component';

describe('I18nSelectPipeComponent', () => {
  let component: I18nSelectPipeComponent;
  let fixture: ComponentFixture<I18nSelectPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I18nSelectPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(I18nSelectPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
