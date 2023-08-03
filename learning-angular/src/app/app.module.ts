import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
<<<<<<< Updated upstream
=======
import { FormTestComponent } from './components/form-test/form-test.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { GithubUserSearchComponent } from './components/github-user-search/github-user-search.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    MainPageComponent
=======
    MainPageComponent,
    FormTestComponent,
    PersonalInfoComponent,
    ProductListComponent,
    GithubUserSearchComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
=======
    FormsModule,
    HttpClientModule,
>>>>>>> Stashed changes
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
