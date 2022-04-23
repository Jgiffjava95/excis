import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { ExcisHomeComponent } from './excis-home/excis-home.component';

const routes: Routes = [
  { path: '', component: LaunchPageComponent },
  { path: 'home', component: ExcisHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
