import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      document: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
        CustomValidator.isCpf()
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
    if (listUsers.length > 0) {
      listUsers.map((item: any) => {
        if(item.document === this.form.value.document){
          if(item.password === this.form.value.password){
            this.busy = false;
            this.router.navigate(['/']);
            sessionStorage.setItem('start', 'true');
            return
          }
          this.busy = false;
          alert('Dados incorretos ou você ainda não possui cadastro!');
          return
        }
        this.busy = false;
        alert('Dados incorretos ou você ainda não possui cadastro!');
      })
    }else{
      this.busy = false;
      alert('Você ainda não possui cadastro!');
    }
    
  }


}

