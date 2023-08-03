import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FormTestComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
