import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-rented-page',
  templateUrl: './rented-page.component.html',
  styleUrls: ['./rented-page.component.css']
})
export class RentedPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  public bookId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      document: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
        CustomValidator.isCpf()
      ])],
    });
  }
  ngOnInit(): void {
  }
  ToRented(){
    this.bookId = this.route.snapshot.queryParamMap.get('bookId')
    var listBooks = JSON.parse(localStorage.getItem('books') || '[]');
    listBooks.forEach((book: Product) => {
      if(book.id === this.bookId) {
          book.rented = true;
          book.rentedBy = {name: this.form.value.name, document: this.form.value.document.replace(/[^\d]+/g,'')}
      }
    })
    localStorage.setItem('books', JSON.stringify(listBooks));
    this.router.navigate(['/']);
  }
}
