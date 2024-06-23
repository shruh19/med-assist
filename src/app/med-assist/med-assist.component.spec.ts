import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedAssistComponent } from './med-assist.component';

describe('MedAssistComponent', () => {
  let component: MedAssistComponent;
  let fixture: ComponentFixture<MedAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedAssistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
