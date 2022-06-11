import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { EditBookPageComponent } from './pages/store/edit-book-page/edit-book-page.component';
import { RegisterBookPageComponent } from './pages/store/register-book-page/register-book-page.component';
import { RentedPageComponent } from './pages/store/rented-page/rented-page.component';
import { ShopBooksPageComponent } from './pages/store/shop-books-page/shop-books-page.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: FramePageComponent,
    canActivate: [AuthService],
    children: [
      { path: '', component: ShopBooksPageComponent },
      { path: 'editBook', component: EditBookPageComponent },
      { path: 'rented', component: RentedPageComponent },
      { path: 'registerBook', component: RegisterBookPageComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
