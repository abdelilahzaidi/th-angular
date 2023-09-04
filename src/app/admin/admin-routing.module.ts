import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  {path:'admin-home',component:HomeComponent},
  {path:'user-new',component:UserNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
