import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardcomponentComponent } from './dashboardcomponent/dashboardcomponent.component';
import { AuthenticationService } from './services/AuthenticationService';
import { PersistStorageUtility } from './services/PersistInStorage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { LoginActivate } from './services/LoginActivate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      { path: 'Home', component: DashboardcomponentComponent, canActivate: [LoginActivate] },
      { path: 'login', component: LoginComponentComponent }
    ])
  ],
  providers: [AuthenticationService, PersistStorageUtility,
    { provide: 'LocalStorage_Name', useValue: 'currentUser'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, LoginActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
