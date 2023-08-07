import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { FormTestComponent } from './components/pages/form-test/form-test.component';
import { GithubUserSearchComponent } from './components/pages/github-user-search/github-user-search.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'form-test', component: FormTestComponent },
  { path: 'github-user', component: GithubUserSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
