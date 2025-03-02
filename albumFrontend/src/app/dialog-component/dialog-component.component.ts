import { DialogModule } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {

  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-component',
  standalone: true,
  imports: [MatButtonModule,DialogModule,MatDialogTitle,
    MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './dialog-component.component.html',
  styleUrl: './dialog-component.component.scss'
})
export class DialogComponentComponent {
  constructor(private dialoBoite:MatDialogRef<DialogComponentComponent>){}
  abandonner(){
    this.dialoBoite.close('0');
  }
  sauvegarder(){
    this.dialoBoite.close('1');
  }

}
