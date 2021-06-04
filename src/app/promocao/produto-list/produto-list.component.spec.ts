import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoListComponent } from './produto-list.component';

describe('PromocaoListComponent', () => {
  let component: PromocaoListComponent;
  let fixture: ComponentFixture<PromocaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
