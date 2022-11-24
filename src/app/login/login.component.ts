import { Component, OnInit } from '@angular/core';

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

  userDetails:any={

    1000:{acno:1000,username:'sanu',password:1000,balance:10000},
    1001:{acno:1001,username:'manu',password:1001,balance:10000},
    1002:{acno:1002,username:'ram',password:1002,balance:10000},
    1003:{acno:1003,username:'vinu',password:1003,balance:10000}


  }

  //class - collection of properties and methods
  //properties / variables
  //userdefined methods

  constructor() {     //(1st execution)
    
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

  login(a:any,p:any){
   // alert("Login Clicked");

   var acno=a.value;
   var pswd=p.value;
   var userDetails=this.userDetails;
   if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert('Login Successfully');

    }
    else{
      alert("invalid password");
    }
   }
   else{
    alert("Invalid User Details");
   }
  }

}
