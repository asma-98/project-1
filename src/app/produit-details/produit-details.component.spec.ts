import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { projetDetailsComponent } from './produit-details.component';

describe('projetDetailsComponent', () => {
  let component: projetDetailsComponent;
  let fixture: ComponentFixture<projetDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ projetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(projetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
