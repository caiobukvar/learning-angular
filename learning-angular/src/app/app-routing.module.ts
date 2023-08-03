import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream

const routes: Routes = [];
=======
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { GithubUserSearchComponent } from './components/github-user-search/github-user-search.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'form-test', component: FormTestComponent },
  { path: 'github-user', component: GithubUserSearchComponent }
];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
