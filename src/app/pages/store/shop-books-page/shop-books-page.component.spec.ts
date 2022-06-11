import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBooksPageComponent } from './shop-books-page.component';

describe('ShopBooksPageComponent', () => {
  let component: ShopBooksPageComponent;
  let fixture: ComponentFixture<ShopBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBooksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
