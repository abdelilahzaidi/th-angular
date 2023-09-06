import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'admin-home',component:HomeComponent},
  {path:'user-new',component:UserNewComponent},
  {path:'user',component:UserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
