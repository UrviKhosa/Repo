import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import * as _ from "underscore";

@Component({
  selector: 'app-completedtraining',
  templateUrl: './completedtraining.component.html',
  styleUrls: ['./completedtraining.component.css']
})
export class CompletedtrainingComponent implements OnInit {

  myTrainings;

  constructor(private myService:FormService) { }

  ngOnInit() {
    this.getTrainings();
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,userId:1,PaymentStatus:true});
      console.log(this.myTrainings);
    });
  }
}
