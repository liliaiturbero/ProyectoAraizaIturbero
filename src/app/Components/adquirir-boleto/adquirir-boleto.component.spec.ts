import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquirirBoletoComponent } from './adquirir-boleto.component';

describe('AdquirirBoletoComponent', () => {
  let component: AdquirirBoletoComponent;
  let fixture: ComponentFixture<AdquirirBoletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdquirirBoletoComponent]
    });
    fixture = TestBed.createComponent(AdquirirBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
