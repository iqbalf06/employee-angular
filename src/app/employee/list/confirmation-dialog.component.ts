import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-dialog',
    template: `
        <h2 mat-dialog-title class="text-center">{{ data.title }}</h2>
        <mat-dialog-content>{{ data.message }}</mat-dialog-content>
        <div mat-dialog-actions class="dialog-actions">
        <button mat-button [mat-dialog-close]="false">Cancel</button>
        <button mat-button class="bg-danger text-white" [mat-dialog-close]="true">Confirm</button>
        </div>
    `,
    styles: [`
    .dialog-actions {
        justify-content: center;
    }
    `]
})

export class ConfirmationDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
}
