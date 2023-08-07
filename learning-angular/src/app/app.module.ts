import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { GithubUserSearchComponent } from './components/github-user-search/github-user-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FormTestComponent,
    PersonalInfoComponent,
    ProductListComponent,
    GithubUserSearchComponent,
    AngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
