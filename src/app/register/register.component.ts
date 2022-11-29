import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno="";
  uname="";
  pswd="";

  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
    
  })

  constructor(private router:Router , private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
// alert("Register clicked");
// this.router.navigateByUrl('login');
console.log(this.registerForm);

var username=this.registerForm.value.uname;
var password=this.registerForm.value.pswd;
var acno=this.registerForm.value.acno;

const result=this.ds.register(acno,username,password);
if(result)
{
  alert("Register successfully");
  this.router.navigateByUrl('');//login page 
}
else{
  alert("Register failed");
  this.router.navigateByUrl('register');
}

 }

}
