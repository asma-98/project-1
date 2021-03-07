import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjetListComponent } from './produit-list.component';

describe('ProjetListComponent', () => {
  let component: ProjetListComponent;
  let fixture: ComponentFixture<ProjetListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
