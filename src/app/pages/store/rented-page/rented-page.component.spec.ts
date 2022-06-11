import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedPageComponent } from './rented-page.component';

describe('RentedPageComponent', () => {
  let component: RentedPageComponent;
  let fixture: ComponentFixture<RentedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
