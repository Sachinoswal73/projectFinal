import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurePipeComponent } from './impure-pipe.component';

describe('ImpurePipeComponent', () => {
  let component: ImpurePipeComponent;
  let fixture: ComponentFixture<ImpurePipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpurePipeComponent]
    });
    fixture = TestBed.createComponent(ImpurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
