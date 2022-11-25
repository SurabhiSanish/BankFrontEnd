import { Component, OnInit } from '@angular/core';
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

  constructor(private router:Router , private ds:DataService) { }

  ngOnInit(): void {
  }

  register(){
// alert("Register clicked");
// this.router.navigateByUrl('login');
var username=this.uname;
var password=this.pswd;
var acno=this.acno;

const result=this.ds.register(acno,username,password);
if(result)
{
  alert("Register successfully");
  this.router.navigateByUrl('');
}
else{
  alert("Register failed");
}




  }

}
