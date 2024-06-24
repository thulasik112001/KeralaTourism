import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictModalComponent } from './district-modal.component';

describe('DistrictModalComponent', () => {
  let component: DistrictModalComponent;
  let fixture: ComponentFixture<DistrictModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
