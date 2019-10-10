import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-login-page-user',
  templateUrl: './login-page-user.component.html',
  styleUrls: ['./login-page-user.component.css']
})
export class LoginPageUserComponent implements OnInit {

  UserLogin: FormGroup;
  submitted = false;
  UserDetails;
  Data;

  constructor(private fb: FormBuilder, private sendlogin: FormService, private router: Router) {
  
  }
  ngOnInit() {
    this.UserLogin = this.fb.group({
    
      Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.required]]
    
    });
  }

  log() {
    this.submitted = true;
    if (this.UserLogin.invalid) {
      return;
    }

      this.sendlogin.login(JSON.stringify(this.UserLogin.value)).subscribe((data)=>{this.Data=data

        if(this.Data!=undefined)
        {
         
          console.log(this.Data);
        if (this.Data.role == 1) {
          localStorage.setItem("adminid", this.Data.id);
          this.router.navigate(['adminmenu']);
        }
        else if (this.Data.role == 2 && this.Data.active == true) {
          localStorage.setItem("trainerid", this.Data.id);
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