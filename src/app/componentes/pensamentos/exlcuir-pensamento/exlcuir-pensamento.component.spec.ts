import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExlcuirPensamentoComponent } from './exlcuir-pensamento.component';

describe('ExlcuirPensamentoComponent', () => {
  let component: ExlcuirPensamentoComponent;
  let fixture: ComponentFixture<ExlcuirPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExlcuirPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExlcuirPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
