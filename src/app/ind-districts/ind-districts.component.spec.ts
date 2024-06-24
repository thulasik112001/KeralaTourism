import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndDistrictsComponent } from './ind-districts.component';

describe('IndDistrictsComponent', () => {
  let component: IndDistrictsComponent;
  let fixture: ComponentFixture<IndDistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndDistrictsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndDistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
