import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninnComponent } from './signinn.component';

describe('SigninnComponent', () => {
  let component: SigninnComponent;
  let fixture: ComponentFixture<SigninnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninnComponent]
    });
    fixture = TestBed.createComponent(SigninnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
