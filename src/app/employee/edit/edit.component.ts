import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';
import { EditModel } from './editModel';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editService: EditService,
    private snackBar: MatSnackBar
  ) { }

  id?: number;
  form = new EditModel()
  dataView: any
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id !== undefined) {
      this.getViewId()
    }
  }

  getViewId() {
    if (this.id !== undefined) {
      this.editService.getViewId(this.id).subscribe(res => {
        this.dataView = res
        this.form = this.dataView.data
        console.log(res);
      })
    }

  }

  updateData() {
    if (this.id !== undefined) {
      this.editService.updateData(this.id, this.form).subscribe(
        res => {
          this.router.navigate(['./employee/list']);
          this.showSnackBar('Data updated successfully', 'success');
        },
        error => {
          this.showSnackBar('Please fill in all fields before submitting.', 'error');
        }
      );
    }
  }

  // Function to show MatSnackBar
  showSnackBar(message: string, panelClass: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: panelClass === 'success' ? 'mat-snack-bar-container-success' : 'mat-snack-bar-container-error'
    });
  }
}