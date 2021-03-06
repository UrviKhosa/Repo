import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class FormService {

  sessionData;

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private _UserData: HttpClient) { }

  //show all users
  public GetAll() {
    return this._UserData.get("https://localhost:44383/api/getuser");
  }

  //Block User
  public Block(id: any) {
    return this._UserData.get("https://localhost:44383/api/blockuser/" + id);
  }
//Get Admin Commision
public AddCommision(data)
{
  return this._UserData.post("https://localhost:44383/api/admincommision",data,this._options).
  pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
}
  //Unblock Users
  public Unblock(id: any) {
    return this._UserData.get("https://localhost:44383/api/unblockuser/" + id);
  }
 //update Trainer Profile

 public UpdateProfile(data)
 {
   return this._UserData.post("https://localhost:44383/api/updatetrainerprofile",data,this._options).
   pipe(map(data1=>(data1=JSON.parse(JSON.stringify(data1)))));
 }
  //login
  public login(loginData) {
    return this._UserData.post("https://localhost:44383/api/login", loginData, this._options).
      pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  //Register
  public Register(signUpData) {
    console.log(signUpData);
    return this._UserData.post("https://localhost:44383/api/register", signUpData, this._options).
      pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));
  }

  //Skill Here 

  //getAllSkills

  public AllSkills() {
    return this._UserData.get("https://localhost:44383/api/getskills");
  }

  //DeleteSkill

  public DeleteSkill(id) {
    return this._UserData.get("https://localhost:44383/api/delteteskill/" + id);
  }

  //AddSkill
  public AddSkill(data) {
    return this._UserData.post("https://localhost:44383/api/addskill", data, this._options).
      pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));;
  }


  //SearchTrainings
  public SearchTrainings(data) {
    return this._UserData.get("https://localhost:44383/api/searchtrainings/" + data);
  }

  //getuser by id

  public GetUserById(id) {
    return this._UserData.get("https://localhost:44383/api/getuserbyid/" + id);
  }

  //get skill price
  public skillprice(techname) {
    return this._UserData.get("https://localhost:44383/api/getskillprice/" + techname);
  }

  //get skill by id
  public GetSkillById(id) {
    return this._UserData.get("https://localhost:44383/api/getskillbyid/" + id);
  }

  //to training

  public sendTrainingDtls(data) {

    return this._UserData.post("https://localhost:44383/api/addTraining", data, this._options).
      pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));;
  }

  //get  Training Approvals
  //get all trainings
  public trainingApprovals() {
    return this._UserData.get("https://localhost:44383/api/getapprovals");

  }
  //Approve Training
  public ApproveTraining(id) {
    return this._UserData.get("https://localhost:44383/api/approveTraining/" + id)
  }

  public DeclineTraining(id) {
    return this._UserData.get("https://localhost:44383/api/declinedTraining/" + id)
  }

  //Get Training By id
  public trainingById(id) {
    return this._UserData.get("https://localhost:44383/api/trainingById/" + id)
  }

  //Training Payment
  public trainingPayment(data) {
    return this._UserData.post("https://localhost:44383/api/paymentgate", data, this._options).
      pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));;
  }

  //All Payments details
  public AllPayments() {
    return this._UserData.get("https://localhost:44383/api/allpayments");
  }

  //Update Payment
  public UpdatePayment(id) {
    return this._UserData.get("https://localhost:44383/api/updatepay/" + id);
  }

  //update training Progress 
  public trainingProgress(data) {
    return this._UserData.post("https://localhost:44383/api/updateProgress", data, this._options).
      pipe(map(data1 => (data1 = JSON.parse(JSON.stringify(data1)))));;
  }
}
