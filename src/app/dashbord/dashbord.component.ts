import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  //deposit 
  acno="";
  pswd="";
  amount="";



  //withdrawal
  acno1="";
  pswd1="";
  amount1="";


  //for login user name-current user
  user="";
  
  constructor(private ds:DataService) { 
    this.user=this.ds.currentUser;
  }

  ngOnInit(): void {
  }
  deposit(){
    // alert("Clicked");
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;

    const result=this.ds.deposit(acno,pswd,amount);

    if(result){
      alert(`${amount} is credited....Available balance is ${result}`);
    }
    else{
      alert('Transaction error')
    }
  }

  withdraw(){
    var acno=this.acno1;
    var pswd=this.pswd1;
    var amount=this.amount1;
    const result=this.ds.withdraw(acno,pswd,amount);
    if(result){
      alert(`${amount} is debited....Available balance is ${result}`);
    }
    else{
      alert('Transaction error')
    }
    }

}
