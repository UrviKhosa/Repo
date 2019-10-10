import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLoaderComponent } from './nav-loader/nav-loader.component';
// import { HomeComponent } from './home/home.component';
import { MainPageIndexComponent } from './main-page-index/main-page-index.component';
import { LoginPageUserComponent } from './login-page-user/login-page-user.component';
import { TrainerLoginPageComponent } from './trainer-login-page/trainer-login-page.component';
import { UserSignUpPageComponent } from './user-sign-up-page/user-sign-up-page.component';
import { TrainerSignUpPageComponent } from './trainer-sign-up-page/trainer-sign-up-page.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { FooterComponent } from './footer/footer.component';
import { TrainermenuComponent } from './trainermenu/trainermenu.component';
import { SearchtrainingComponent } from './searchtraining/searchtraining.component';
import { CurrenttrainingComponent } from './currenttraining/currenttraining.component';
import { CompletedtrainingComponent } from './completedtraining/completedtraining.component';
import { CurrenttrainingtrainerComponent } from './currenttrainingtrainer/currenttrainingtrainer.component';
import { CompletedtrainingtrainerComponent } from './completedtrainingtrainer/completedtrainingtrainer.component';
import { EditskillstrainerComponent } from './editskillstrainer/editskillstrainer.component';
import { PaymenttrainerComponent } from './paymenttrainer/paymenttrainer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormGroup,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdminblockComponent } from './adminblock/adminblock.component';
import { AdminmanagepaymentsComponent } from './adminmanagepayments/adminmanagepayments.component';

import{HttpClientModule, HttpHeaders} from '@angular/common/http';
// import { freemem } from 'os';
import { FormService } from './form.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { SelecttrainerComponent } from './selecttrainer/selecttrainer.component';
import { UserrequestComponent } from './userrequest/userrequest.component';
import { TrainerrequestsComponent } from './trainerrequests/trainerrequests.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserpayComponent } from './userpay/userpay.component';
@NgModule({
  declarations: [
    AppComponent,
    NavLoaderComponent,
    // HomeComponent,
    MainPageIndexComponent,
    LoginPageUserComponent,
    TrainerLoginPageComponent,
    UserSignUpPageComponent,
    TrainerSignUpPageComponent,
    UserMenuComponent,
    FooterComponent,
    TrainermenuComponent,
    SearchtrainingComponent,
    CurrenttrainingComponent,
    CompletedtrainingComponent,
    CurrenttrainingtrainerComponent,
    CompletedtrainingtrainerComponent,
    EditskillstrainerComponent,
    PaymenttrainerComponent,
    AdminloginComponent,
    AdminmenuComponent,
    AdminaddComponent,
    AdminblockComponent,
    AdminmanagepaymentsComponent,
    UserprofileComponent,
    TrainerProfileComponent,
    SelecttrainerComponent,
    UserrequestComponent,
    TrainerrequestsComponent,
    MainpageComponent,
    UserpayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
