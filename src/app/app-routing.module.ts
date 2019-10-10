import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageIndexComponent } from './main-page-index/main-page-index.component';
import { LoginPageUserComponent } from './login-page-user/login-page-user.component';
import { TrainerLoginPageComponent } from './trainer-login-page/trainer-login-page.component';
import { UserSignUpPageComponent } from './user-sign-up-page/user-sign-up-page.component';
import { TrainerSignUpPageComponent } from './trainer-sign-up-page/trainer-sign-up-page.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { TrainermenuComponent } from './trainermenu/trainermenu.component';
import { SearchtrainingComponent } from './searchtraining/searchtraining.component';
import { CurrenttrainingComponent } from './currenttraining/currenttraining.component';
import { CompletedtrainingComponent } from './completedtraining/completedtraining.component';
import { CurrenttrainingtrainerComponent } from './currenttrainingtrainer/currenttrainingtrainer.component';
import { CompletedtrainingtrainerComponent } from './completedtrainingtrainer/completedtrainingtrainer.component';
import { EditskillstrainerComponent } from './editskillstrainer/editskillstrainer.component';
import { PaymenttrainerComponent } from './paymenttrainer/paymenttrainer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdminblockComponent } from './adminblock/adminblock.component';
import { AdminmanagepaymentsComponent } from './adminmanagepayments/adminmanagepayments.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { SelecttrainerComponent } from './selecttrainer/selecttrainer.component';
import { UserrequestComponent } from './userrequest/userrequest.component';
import { TrainerrequestsComponent } from './trainerrequests/trainerrequests.component';
import { UserpayComponent } from './userpay/userpay.component';


const routes: Routes = [
   {path:'',redirectTo:'index',pathMatch:'full'},
   {path:'index',component:MainPageIndexComponent},
  {path:'loginuser',component:LoginPageUserComponent},
  {path:'logintrainer',component:TrainerLoginPageComponent},
  {path:'signupuser',component:UserSignUpPageComponent},
  {path:'signuptrainer',component:TrainerSignUpPageComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'trainerprofile',component:TrainerProfileComponent},
  {path:'selecttrainer',component:SelecttrainerComponent},
  {path:'userpay',component:UserpayComponent},

  {path:'usermenu',component:UserMenuComponent,

  children:[
    {path:'searchtraining',component:SearchtrainingComponent},
    {path:'currenttraining',component:CurrenttrainingComponent},
    {path:'completedtraining',component:CompletedtrainingComponent},
    {path:'userrequest',component:UserrequestComponent},

  ]},
  {path:'trainermenu',component:TrainermenuComponent,
  children:[
{path:'currenttrainingtrainer',component:CurrenttrainingtrainerComponent},
{path:'completedtrainingtrainer',component:CompletedtrainingtrainerComponent},
{path:'editskillstrainer',component:EditskillstrainerComponent},
{path:'trainerrequests',component:TrainerrequestsComponent},

{path:'paymenttrainer',component:PaymenttrainerComponent},

  ]},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminmenu',component:AdminmenuComponent,
children:[
  {path:'adminadd',component:AdminaddComponent},
  {path:'adminblock',component:AdminblockComponent},
  {path:'adminmanagepayments',component:AdminmanagepaymentsComponent},

]},



  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
