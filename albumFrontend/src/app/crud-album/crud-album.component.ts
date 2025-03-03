import { Component } from '@angular/core';
import { first, Observable } from 'rxjs';
import { CrudAlbumService } from '../services/crud-album.service';
import {CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ToastComponent } from '../toast/toast.component';
import {MatSnackBar,  MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
@Component({
  selector: 'app-crud-album',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatProgressSpinnerModule],
  templateUrl: './crud-album.component.html',
  styleUrl: './crud-album.component.scss'
})
export class CrudAlbumComponent {
constructor(private crudalbumservice:CrudAlbumService,public dialogue:MatDialog,private toast:MatSnackBar){}
data :any
id:any
lastinfo:any[]=[]
info:any[]=[]
last_id="";
lastChamp:any;
changed:Boolean=false
chargement:Boolean=false
firstcontent:any[]=[]
valider=false;
ngOnInit(){
this.recuperationToutAlbum()
}
//fonction de toat

toastFunc(message:string){
  this.toast.openFromComponent(ToastComponent,{
    duration:1000,
    data:message,
    verticalPosition:'top',
    horizontalPosition:'center'
  })
}


// fonction de recupération des element html

recuperationToutAlbum(){
  this.chargement=true
  this.crudalbumservice.getAllAlbum().subscribe((data:any) => {
    if(data){
    this.chargement=false
    this.data=data
    }
  })
}
reperationLigne(id:string){
  let contenu=document.getElementById(id)?.children[0] as HTMLInputElement
  // recuperation des valeurs initiales des inputs
   contenu=document.getElementById(id)?.children[0] as HTMLInputElement
        this.lastinfo.push(contenu?.value)
        contenu=document.getElementById(id)?.children[1] as HTMLInputElement
        this.lastinfo.push(contenu?.value)
        contenu=document.getElementById(id)?.children[2] as HTMLInputElement
        this.lastinfo.push(contenu?.value)

}


premierContenu(id:string){
  this.firstcontent=[]
  let contenu=document.getElementById(id)?.children[0] as HTMLInputElement
  // recuperation des valeurs initiales des inputs
   contenu=document.getElementById(id)?.children[0] as HTMLInputElement
        this.firstcontent.push(contenu?.value)
        contenu=document.getElementById(id)?.children[1] as HTMLInputElement
        this.firstcontent.push(contenu?.value)
        contenu=document.getElementById(id)?.children[2] as HTMLInputElement
        this.firstcontent.push(contenu?.value)
        this.firstcontent.push(id)
        console.log(this.firstcontent+"test")

}

recuperationLastLigne(id:string){
  let lastcontenu=document.getElementById(id)?.children[0] as HTMLInputElement
  this.info.push(lastcontenu?.value)
  lastcontenu=document.getElementById(id)?.children[1] as HTMLInputElement
  this.info.push(lastcontenu?.value)
  lastcontenu=document.getElementById(id)?.children[2] as HTMLInputElement
  this.info.push(lastcontenu?.value)
}



//function d'ouverture de la boite de dialogue
   openDialog(id:any,nouveleLigne:any){

   const dialog=this.dialogue.open(DialogComponentComponent,{

      hasBackdrop: true,
      disableClose: true
    });
    dialog.afterClosed().subscribe((result:any)=>{
       if(result==1){
        this.id=id
          this.update()
          this.valider=true
          this.changed=false
       }else if(result==0){
        this.changed=false
        this.valider=true
        let contenu=document.getElementById(this.firstcontent[3])?.children[0] as HTMLInputElement
         contenu.value=this.firstcontent[0]
        contenu=document.getElementById(this.firstcontent[3])?.children[1] as HTMLInputElement
         contenu.value=this.firstcontent[1]
        contenu=document.getElementById(this.firstcontent[3])?.children[2] as HTMLInputElement
         contenu.value=this.firstcontent[2]
         this.premierContenu(nouveleLigne)

       }
    })

}



focus(event:MouseEvent,id:any){
  if(this.lastChamp){
    this.lastChamp.classList.add("curseur")
  }
  if(event.detail==1){

    let chamt = event.target as HTMLInputElement
    chamt.blur()

  }else{
    let chamt = event.target as HTMLInputElement
    chamt.classList.remove("curseur")
  }


  //verification un  changement a été effectué
  if(this.last_id!=""){
    this.recuperationLastLigne(this.last_id)

    if(this.info[0]!=this.lastinfo[0] || this.info[1]!=this.lastinfo[1] ||this.info[2]!=this.lastinfo[2])
    {
     // ouverture de la boite de dialogue ,choix entre abandonné ou enregistré la modification
     this.changed=true
    }

  }
    //vérification de ci le champ est selection pour la première fois
    if(id!=this.last_id && this.changed==false){
      this.premierContenu(id)
     }
 //verification si un chanp selectionné a été modifier et pas na pas été  enrégistré
 if(this.last_id!="" && id != this.last_id){

  this.recuperationLastLigne(this.last_id)

  if(this.changed && id != this.last_id)
  {
   // ouverture de la boite de dialogue ,choix entre abandonné ou enregistré la modification
     this.openDialog(this.last_id,id)
  }

 }
 this.info=[]
 this.lastinfo=[]

    this.reperationLigne(id)
    this.id=id
   // mise en place de la fonction de selection et de ligne

        if(this.last_id!=""){
          let last_div=document.getElementById(this.last_id)
          last_div?.classList.remove('focus')
        }
        this.last_id=id
      let divCont=document.getElementById(id)
      divCont?.classList.add('focus')


}
//function de suppression

delete(){
this.chargement=true
this.crudalbumservice.supprimerAlbum(this.id).subscribe((data)=>{
  if(data.code==200){
    document.getElementById(this.id)?.parentElement?.remove()
    this.chargement=false
    this.toastFunc("supprimé avec succes")

  }else
  {   this.chargement=false
    this.toastFunc("erreur lors de la tentative de supprission")
  }
})
}

//function de mise a jour d'un album
update(){
  this.chargement=true
      if(this.id!="")
      {
   // recuperation des valeurs initiales des inputs

          let contenu=document.getElementById(this.id)?.children[0] as HTMLInputElement
          this.info.push(contenu?.value)
          contenu=document.getElementById(this.id)?.children[1] as HTMLInputElement
          this.info.push(contenu?.value)
          contenu=document.getElementById(this.id)?.children[2] as HTMLInputElement
          this.info.push(contenu?.value)
           console.log("test"+this.id)
          if(this.info[0]==this.lastinfo[0] &&this.info[1]==this.lastinfo[1] &&this.info[2]==this.lastinfo[2])
          { this.chargement=false
            this.toastFunc("aucune modification effectué")
          }else{
             console.log(this.id,this.info[0])
            this.crudalbumservice.update(this.id,this.info[0],this.info[1],this.info[2]).subscribe((data)=>{
                if(data.code==200){
                  this.chargement=false
                  this.changed=false
                  this.toastFunc("enrégister avec succès")
                }else
                {   this.chargement=false
                  this.toastFunc("erreur lors de la tentative de de d'enregistrement")
                }
              })
            }
      }
  this.info=[]
}

}
