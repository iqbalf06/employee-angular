import { Component, OnInit } from '@angular/core';
import { AddModel } from './addModel';
import { AddService } from './add.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title = 'Form New Employee'
  form = new AddModel()

  constructor
    (
      private addService: AddService,
      private router: Router,
      private snackBar: MatSnackBar
    ) { } 

  ngOnInit(): void {

  }

  insertData() {
    if (!this.form.name || !this.form.dob || !this.form.gender || !this.form.department) {
      this.showSnackBar('Please fill in all fields before submitting.', 'error');
      return;
    }
  
    this.addService.insertData(this.form).subscribe(
      (res) => {
        this.router.navigate(['../employee/list']);
        console.log('Data inserted successfully:', res);
        this.showSnackBar('Employee data has been successfully added.', 'success');
      },
      (error) => {
        console.error('Error inserting data:', error);
        this.showSnackBar('Error inserting data. Please try again.', 'error');
      }
    );
  }

  showSnackBar(message: string, panelClass: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: panelClass === 'success' ? 'mat-snack-bar-container-success' : 'mat-snack-bar-container-error'
    });
  }  
}