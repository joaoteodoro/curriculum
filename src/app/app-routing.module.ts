import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'curriculum', pathMatch: 'full' },
  { path: 'curriculum', component: MainPageComponent },
  { path: 'curriculum/:locale', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
