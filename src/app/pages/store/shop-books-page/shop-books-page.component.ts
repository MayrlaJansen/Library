import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-shop-books-page',
  templateUrl: './shop-books-page.component.html',
  styleUrls: ['./shop-books-page.component.css']
})
export class ShopBooksPageComponent implements OnInit {
  products: Product[] | [] = [];
  public expand = false;
  public auxDelete: number = -1;

  constructor(
  ) { 
  }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('books') || '[]');
    console.log(this.products);
  }

  toExpand(){
    this.expand = !this.expand;
  }

  giveBack(bookId: string){
    var listBooks = JSON.parse(localStorage.getItem('books') || '[]');
    listBooks.forEach((book: Product) => {
      if(book.id === bookId) {
          book.rented = false;
          book.rentedBy = {};
      }
    })
    localStorage.setItem('books', JSON.stringify(listBooks));
    this.products = JSON.parse(localStorage.getItem('books') || '[]');
  }

  delete(id: string){
    var listBooks = JSON.parse(localStorage.getItem('books') || '[]');
    listBooks.forEach((book: Product, index: number) => {
      if(book.id === id) {
        this.auxDelete = index
      }
    })
    listBooks.splice(this.auxDelete, 1);
    localStorage.setItem('books', JSON.stringify(listBooks));
    this.products = JSON.parse(localStorage.getItem('books') || '[]');
  }
  
}
