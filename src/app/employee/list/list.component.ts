import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataList!: {
    id: number;
    name: string;
    dob: Date;
    gender: string;
    department: string;
  }[];

  filteredDataList: any[] = [];

  searchText: string = '';
  columnTable = ['#', 'ID', 'Employee Name', 'DOB', 'Gender', 'Department', 'Action'];
  title = "Employee List";


  constructor(
    private listService: ListService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this.listService.getDataList().subscribe(
      (res) => {
        this.dataList = res.data;
        this.filteredDataList = this.dataList;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getClassByIndex(index: number): string {
    return index % 2 === 0 ? 'bg-white' : 'bg-light';
  }

  deleteData(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to delete this data?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listService.deleteData(id).subscribe(
          (res) => {
            console.log('Data deleted successfully:', res);
            this.showSnackBar('Data deleted successfully', 'success');
            this.getDataList();
          },
          (error) => {
            console.error('Error deleting data:', error);
            this.showSnackBar('Error deleting data', 'error');
          }
        );
      }
    });
  }

  showSnackBar(message: string, panelClass: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: panelClass === 'success' ? 'mat-snack-bar-container-success' : 'mat-snack-bar-container-error'
    });
  }

  search() {
    this.filteredDataList = this.dataList.filter(data =>
      data.id.toString().includes(this.searchText) ||
      data.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      data.dob.toString().includes(this.searchText) ||
      data.gender.toLowerCase().includes(this.searchText.toLowerCase()) ||
      data.department.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}