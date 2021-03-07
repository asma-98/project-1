import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateProjetComponent } from './update-produit.component';

describe('UpdateProjetComponent', () => {
  let component: UpdateProjetComponent;
  let fixture: ComponentFixture<UpdateProjetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
