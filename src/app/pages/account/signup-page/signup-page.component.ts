import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
 

  constructor(
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
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }
 
  ngOnInit() {
  }

  submit() {
    this.busy = true;

    var listUsers = JSON.parse(localStorage.getItem('users') || '[]');
    listUsers.push(
      { name: this.form.value.name, email: this.form.value.email, document: this.form.value.document.replace(/[^\d]+/g,''), password: this.form.value.password}
    );
    localStorage.setItem("users", JSON.stringify(listUsers));

    this.busy = false;
    this.router.navigate(['/login']);
  }
}
