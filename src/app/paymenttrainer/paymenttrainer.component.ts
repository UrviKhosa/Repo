import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import * as _ from "underscore";
import {Router} from '@angular/router';
@Component({
  selector: 'app-paymenttrainer',
  templateUrl: './paymenttrainer.component.html',
  styleUrls: ['./paymenttrainer.component.css']
})
export class PaymenttrainerComponent implements OnInit {

  payRecords;
  myPayRecord;
  userData;
  CurrentUser;
  constructor(private myService:FormService,private router:Router) { 
    if(localStorage.getItem("trainerid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    let i= localStorage.getItem("trainerid");
    this.CurrentUser= +i;
    this.getPaymentDtls();
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {

        this.payRecords=data;
        console.log(this.payRecords);
         this.myPayRecord=_.where(this.payRecords,{mentorId:this.CurrentUser});
         console.log(this.myPayRecord);

      });
  }

  getUserById(id)
  {
    this.myService.GetUserById(id).subscribe(data=>
      {
         this.userData=data;
      })
  }


}
