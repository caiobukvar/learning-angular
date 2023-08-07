import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserSearchComponent } from './components/pages/github-user-search/github-user-search.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { FormTestComponent } from './components/pages/form-test/form-test.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FormTestComponent,
    PersonalInfoComponent,
    ProductListComponent,
    GithubUserSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatDividerModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
