import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-book-page',
  templateUrl: './register-book-page.component.html',
  styleUrls: ['./register-book-page.component.css']
})
export class RegisterBookPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
      author: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
      description: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(800),
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

  register(){
    this.busy = true;
    let id = Math.floor(Math.random() * 10000);
    let listBooks = JSON.parse(localStorage.getItem('books') || '[]');
    listBooks.push({
      id: id.toString(),
      title: this.form.value.title,
      author: this.form.value.author,
      description: this.form.value.description,
      price: this.form.value.price,
      image: this.form.value.urlImage,
      rented: false,
      rentedBy: {}
    })
    localStorage.setItem('books', JSON.stringify(listBooks));
    this.busy = false;
    this.router.navigate(['/']);
  }
}
