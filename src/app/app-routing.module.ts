import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no route is provided
  { path: '**', redirectTo: '/login' }, 
  { path: 'employee-list', component: EmployeeListComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
