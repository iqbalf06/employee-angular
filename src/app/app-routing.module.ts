import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/employee/list', pathMatch: 'full' },
  {
    path:'employee',
    loadChildren:()=>import('./employee/employee.module').then(mod=>mod.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
