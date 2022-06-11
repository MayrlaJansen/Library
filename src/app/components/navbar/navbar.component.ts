import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public expand = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  logout() {
    this.router.navigate(['/login']);
    sessionStorage.setItem('start', 'false');
  }

  toExpand(){
    this.expand = !this.expand;
  }
  search() {
      
  }
}