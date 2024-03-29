import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingSyntaxComponent } from './data-binding-syntax.component';

describe('DataBindingSyntaxComponent', () => {
  let component: DataBindingSyntaxComponent;
  let fixture: ComponentFixture<DataBindingSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataBindingSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
