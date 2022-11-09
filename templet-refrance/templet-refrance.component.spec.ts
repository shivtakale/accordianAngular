import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletRefranceComponent } from './templet-refrance.component';

describe('TempletRefranceComponent', () => {
  let component: TempletRefranceComponent;
  let fixture: ComponentFixture<TempletRefranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletRefranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletRefranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
