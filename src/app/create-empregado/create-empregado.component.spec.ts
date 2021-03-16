import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpregadoComponent } from './create-empregado.component';

describe('CreateEmpregadoComponent', () => {
  let component: CreateEmpregadoComponent;
  let fixture: ComponentFixture<CreateEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
