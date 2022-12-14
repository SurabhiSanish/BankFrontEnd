import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //  (3rd execution)


  aim="Your perfect banking partner";  //string interpolation(<h6>{{aim}}</h6> in login.component.html )
  account="Enter your Account here";   //property binding   (place holder in login.component.html)
  acno='';
  pswd='';



  //class - collection of properties and methods
  //properties / variables
  //userdefined methods

  constructor(private ds:DataService , private router:Router) {     //(1st execution)
    
    //it automatically invoke when the object is created  
  } 

  ngOnInit(): void {    //(2nd execution)
    
    //for initioal process of components
    //life cycle hook of Angular

  }

 
  acnoChange(event:any){
    console.log(event);
    
     this.acno=event.target.value;
     console.log(this.acno);

  }

  pswdChange(event:any){
    
    
     this.pswd=event.target.value;
     console.log(this.pswd);

  }

  // login(a:any,p:any){
  //  // alert("Login Clicked");

  //  var acno=a.value;
  //  var pswd=p.value;
  //  var userDetails=this.userDetails;
  //  if(acno in userDetails){
  //   if(pswd==userDetails[acno]['password']){
  //     alert('Login Successfully');

  //   }
  //   else{
  //     alert("invalid password");
  //   }
  //  }
  //  else{
  //   alert("Invalid User Details");
  //  }
  // }


  login(){
    // alert("Login Clicked");
 
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;

    const result=this.ds.login(acno,pswd)
    if(result){
      alert('Login Successfully');
      this.router.navigateByUrl('dashbord');
    }
    else{
      alert("Login failed");
    }



    // if(acno in userDetails){
    //  if(pswd==userDetails[acno]['password']){
      
 
    //  }
    //  else{
    //    alert("invalid password");
    //  }
    // }
    // else{
    //  alert("Invalid User Details");
    // }
   }

}
