import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{JokesModuleModule}from './jokes/jokes-module.module'
import{SharedServiceService} from './shared-service.service'
import{ErrorResponseService} from './error-response/error-response.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthheaderInterceptor } from './http.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
FormsModule
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JokesModuleModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [SharedServiceService,ErrorResponseService,{provide:HTTP_INTERCEPTORS,useClass:AuthheaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
