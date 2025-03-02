import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudAlbumService } from '../services/crud-album.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-cration-album',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cration-album.component.html',
  styleUrl: './cration-album.component.scss'
})
export class CrationAlbumComponent {
  constructor(private seviceAlBum:CrudAlbumService){  }
nom="";prenom="";titre=""

enregistrer(){

  if(this.nom =="" || this.prenom==""|| this.titre=="")
  {
    alert("tous les champs sont obligatoire")
  }else{
    this.seviceAlBum.createAllbum(this.nom,this.prenom,this.titre).subscribe((data=>{
      if(data.code==200){
        alert("enregistré avec succès")

      }else
      {
         alert("une erreur est survenue")
      }

    }))
  }

}
}
