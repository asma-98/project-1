import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  user={
    login:'admin',
    password:'admin'
  }
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  test() {
  
 if(this.user.login=='admin' && this.user.password=='admin'){
 

   this.router.navigate(['/produits']);
  
 }else{
  alert("login ou password incorrect");
 }

  }

}
