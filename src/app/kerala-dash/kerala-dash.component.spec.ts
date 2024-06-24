import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeralaDashComponent } from './kerala-dash.component';

describe('KeralaDashComponent', () => {
  let component: KeralaDashComponent;
  let fixture: ComponentFixture<KeralaDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeralaDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeralaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
