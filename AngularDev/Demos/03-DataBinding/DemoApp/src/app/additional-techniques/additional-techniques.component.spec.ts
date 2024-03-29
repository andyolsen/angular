import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTechniquesComponent } from './additional-techniques.component';

describe('AdditionalTechniquesComponent', () => {
  let component: AdditionalTechniquesComponent;
  let fixture: ComponentFixture<AdditionalTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalTechniquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
