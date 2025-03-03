import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudAlbumService } from '../services/crud-album.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastComponent } from '../toast/toast.component';


@Component({
  selector: 'app-cration-album',
  standalone: true,
  imports: [CommonModule,FormsModule,MatProgressSpinnerModule],
  templateUrl: './cration-album.component.html',
  styleUrl: './cration-album.component.scss'
})
export class CrationAlbumComponent {
  constructor(private seviceAlBum:CrudAlbumService,private toast:MatSnackBar){  }
nom="";prenom="";titre="";chargement=false

enregistrer(){

  if(this.nom =="" || this.prenom==""|| this.titre=="")
  {

     this.toast.openFromComponent(ToastComponent,{
        duration:1000,
        data:"tous les champs sont obligatoire",
        verticalPosition:'top',
        horizontalPosition:'center'
      })

  }else{
    this.chargement=true
    this.seviceAlBum.createAllbum(this.nom,this.prenom,this.titre).subscribe((data=>{
      if(data.code==200){
        this.chargement=false
        this.toast.openFromComponent(ToastComponent,{
          duration:1000,
          data:"enregistré avec succès",
          verticalPosition:'top',
          horizontalPosition:'center'
        })


        this.nom="";this.prenom="";this.titre=""
      }else
      {
        this.chargement=false
        this.toast.openFromComponent(ToastComponent,{
          duration:1000,
          data:"une erreur est survenue",
          verticalPosition:'top',
         horizontalPosition:'center'
        })
      }

    }))
  }

}
}
