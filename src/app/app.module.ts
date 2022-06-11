import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShopBooksPageComponent } from './pages/store/shop-books-page/shop-books-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { AuthService } from './services/auth.service';
import { EditBookPageComponent } from './pages/store/edit-book-page/edit-book-page.component';
import { RentedPageComponent } from './pages/store/rented-page/rented-page.component';
import { RegisterBookPageComponent } from './pages/store/register-book-page/register-book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ShopBooksPageComponent,
    FramePageComponent,
    LoadingComponent,
    SignupPageComponent,
    EditBookPageComponent,
    RentedPageComponent,
    RegisterBookPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
