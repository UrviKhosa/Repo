import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import * as _ from "underscore";
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styleUrls: ['./currenttraining.component.css']
})
export class CurrenttrainingComponent implements OnInit {

  myTrainings;
  traninerName;
  CurrentUser; 
  constructor(private myService:FormService,private router:Router) { 
    if(localStorage.getItem("Id")==undefined)
    {
      alert("Please login");
      this.router.navigate(['loginuser']);
    }
  }

  ngOnInit() {
    let i= localStorage.getItem("Id");
    this.CurrentUser= +i;
  
    this.getTrainings();
  }

  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,Id:this.CurrentUser,PaymentStatus:true});
      console.log(this.myTrainings);
     // this.getTrainerById();
    });
  }

  getTrainerById()
  {
    this.myService.GetAll().subscribe(data=>
    {
      this.traninerName=data;
      console.log(this.traninerName);
    })
  }
}