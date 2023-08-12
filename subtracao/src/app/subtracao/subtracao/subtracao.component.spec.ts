import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtracaoComponent } from './subtracao.component';

describe('SubtracaoComponent', () => {
  let component: SubtracaoComponent;
  let fixture: ComponentFixture<SubtracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtracaoComponent]
    });
    fixture = TestBed.createComponent(SubtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
