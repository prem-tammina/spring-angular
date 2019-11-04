import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ListTodosComponent } from './components/todos/list-todos/list-todos.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LogoutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
