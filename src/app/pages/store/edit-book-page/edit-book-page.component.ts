import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-edit-book-page',
  templateUrl: './edit-book-page.component.html',
  styleUrls: ['./edit-book-page.component.css']
})
export class EditBookPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  public bookId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      description: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      price: ['', Validators.compose([
        Validators.required,
      ])],
      urlImage: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required
      ])],
    });
  }

  ngOnInit(): void {
  }

  edit(){
    this.bookId = this.route.snapshot.queryParamMap.get('bookId')
    var listBooks = JSON.parse(localStorage.getItem('books') || '[]');
    listBooks.forEach((book: Product) => {
      if(book.id === this.bookId) {
        this.form.value.description != "" ? book.description = this.form.value.description : null
        this.form.value.price !== "" ? book.price = this.form.value.price : null
        this.form.value.urlImage !== "" ? book.image = this.form.value.urlImage : null
      }
    })
    localStorage.setItem('books', JSON.stringify(listBooks));
    this.router.navigate(['/']);
  }
}
