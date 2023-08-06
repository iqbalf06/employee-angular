import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './list/confirmation-dialog.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: 'employee', component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'list', component: ListComponent
      },
      {
        path: 'add', component: AddComponent
      },
      {
        path: 'edit/:id', component: EditComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
