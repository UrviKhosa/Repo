import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-trainer-login-page',
  templateUrl: './trainer-login-page.component.html',
  styleUrls: ['./trainer-login-page.component.css']
})
export class TrainerLoginPageComponent implements OnInit {
  TrainerLogin:FormGroup;
  submitted;
  Data;
  constructor(private fb: FormBuilder, private sendlogin: FormService, private router: Router) {

  }
  ngOnInit() {
    this.TrainerLogin= this.fb.group({
      Name: ['', [Validators.required]],
      Password: ['',[Validators.required, Validators.minLength(8)]]
    
    });
  }
  
  log() {
    this.router.navigate(['/trainermenu']);

    this.submitted = true;
    if (this.TrainerLogin.invalid) {
      return;
    }
  
      this.sendlogin.login(JSON.stringify(this.TrainerLogin.value)).subscribe((data)=>{this.Data=data
  
        if(this.Data!=undefined)
        {
         
          console.log(this.Data);
        if (this.Data.role == 1) {
          this.router.navigate(['adminmenu']);
        }
        else if (this.Data.role == 2 && this.Data.active == true) {
          this.router.navigate(['trainermenu']);
        }
        else if (this.Data.role == 3 && this.Data.active == true) {
          localStorage.setItem("Id", this.Data.id);
          console.log(localStorage.setItem("Id", this.Data.id));
          this.router.navigate(['usermenu']);
        }
        else {
          alert("Account Blocked");
        }
      }
      else
      {
        alert("Invalid Email and Password");
      }
  });
  
     
  }
  }
  

