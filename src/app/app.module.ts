
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';    
import {FormsModule} from '@angular/forms';    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule} from "./auth/auth.module";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { FilterPipe } from './core/shared/guards/pipes/filter.pipe';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { SharedModule } from './core/shared/shared.module';
import { MatMenuModule } from "@angular/material/menu";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './core/shared/guards/loading.interceptor';
import { NavComponent } from './components/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    
    NotfoundComponent,
    HomeComponent,
    BlankLayoutComponent,
    FilterPipe,
    AddNoteComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
