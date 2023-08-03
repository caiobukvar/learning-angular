import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormTestComponent } from './components/form-test/form-test.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'form-test', component: FormTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
