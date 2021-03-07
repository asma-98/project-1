import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateProjetComponent } from './create-produit.component';

describe('CreateProjetComponent', () => {
  let component: CreateProjetComponent;
  let fixture: ComponentFixture<CreateProjetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
