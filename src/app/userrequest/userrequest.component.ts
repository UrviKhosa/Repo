import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import * as _ from "underscore";
import {Router} from '@angular/router';
@Component({
  selector: 'app-userrequest',
  templateUrl: './userrequest.component.html',
  styleUrls: ['./userrequest.component.css']
})
export class UserrequestComponent implements OnInit {

  myData;
  Approved;
  Declined;
  Pending;

  allReciptData;
  ReciptData;
  CurrentUser;

  constructor(private myService:FormService,private route:Router) {
    if(localStorage.getItem("userid")==undefined)
    {
      alert("Please login");
      this.route.navigate(['login']);
    }

   }

  ngOnInit() {
  let i= localStorage.getItem("userid");
  this.CurrentUser= +i;
  this.getmyData();
  this.getPaymentDtls();

  }

  getmyData()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.myData=data;
        console.log(this.myData);
        this.Approved=_.where(this.myData,{accept:true,userId:this.CurrentUser});
        console.log(this.Approved);
         this.Pending=_.where(this.myData,{accept:false,rejected:false,userId:this.CurrentUser});
        this.Declined=_.where(this.myData,{rejected:true,userId:this.CurrentUser});
        console.log("Pending "+JSON.stringify(this.Pending));
       
      });
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {
        this.allReciptData=data;
      })
  }


  Pay(id)
  {
    alert(id);  
    const data={
      ID:id,
   };
 
    this.route.navigate(['/Payment'],{queryParams:data});  
  }

  SeeRecipt(id)
  {
    console.dir(this.allReciptData);
    
   this.ReciptData=_.where(this.allReciptData,{skillId:id,userId:this.CurrentUser,PaymentStatus:true});
    
    console.log(this.ReciptData);


  }

}
