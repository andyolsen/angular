import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingCustomPipeComponent } from './using-custom-pipe.component';

describe('UsingCustomPipeComponent', () => {
  let component: UsingCustomPipeComponent;
  let fixture: ComponentFixture<UsingCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingCustomPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsingCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
