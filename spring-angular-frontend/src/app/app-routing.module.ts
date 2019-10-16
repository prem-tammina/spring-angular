import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ErrorComponent } from './components/pages/error/error.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'welcome', component: WelcomeComponent
  }, {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
