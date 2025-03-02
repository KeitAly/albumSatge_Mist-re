import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudAlbumService } from '../services/crud-album.service';
import { AsyncPipe, CommonModule } from '@angular/common';
@Component({
  selector: 'app-crud-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-album.component.html',
  styleUrl: './crud-album.component.scss'
})
export class CrudAlbumComponent {
constructor(private crudalbumservice:CrudAlbumService){}
data :any
id:any
lastinfo:any[]=[]
info:any[]=[]
last_id="";
lastChamp:any;
ngOnInit(){
  this.crudalbumservice.getAllAlbum().subscribe((data:any) => {
    this.data =data

  })
}
tests(){
  alert('test')
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
 //verification si un chanp selectionné a été modifier et pas na pas été  enrégistré
 console.log(id,this.last_id)
 if(this.last_id!="" && id != this.last_id){
   let lastcontenu=document.getElementById(this.last_id)?.children[0] as HTMLInputElement
          this.info.push(lastcontenu?.value)
          lastcontenu=document.getElementById(this.last_id)?.children[1] as HTMLInputElement
          this.info.push(lastcontenu?.value)
          lastcontenu=document.getElementById(this.last_id)?.children[2] as HTMLInputElement
          this.info.push(lastcontenu?.value)
  if(this.info[0]!=this.lastinfo[0] || this.info[1]!=this.lastinfo[1] ||this.info[2]!=this.lastinfo[2])
  {

       alert("les modification seron perdu , voulé vous changé de ligne ??")
  }

 }
 this.info=[]
 this.lastinfo=[]

   let contenu=document.getElementById(this.id)?.children[0] as HTMLInputElement
  // recuperation des valeurs initiales des inputs
   contenu=document.getElementById(id)?.children[0] as HTMLInputElement
        this.lastinfo.push(contenu?.value)
        contenu=document.getElementById(id)?.children[1] as HTMLInputElement
        this.lastinfo.push(contenu?.value)
        contenu=document.getElementById(id)?.children[2] as HTMLInputElement
        this.lastinfo.push(contenu?.value)

   // mise en place de la fonction de selection et de dese
       this.id=id
        if(this.last_id!=""){
          let last_div=document.getElementById(this.last_id)
          last_div?.classList.remove('focus')
        }
        this.last_id=id
      let divCont=document.getElementById(id)
      divCont?.classList.add('focus')


}
//function de suppression


//function de mise a jour d'un album
update(){
      if(this.id!="")
      {
   // recuperation des valeurs initiales des inputs

          let contenu=document.getElementById(this.id)?.children[0] as HTMLInputElement
          this.info.push(contenu?.value)
          contenu=document.getElementById(this.id)?.children[1] as HTMLInputElement
          this.info.push(contenu?.value)
          contenu=document.getElementById(this.id)?.children[2] as HTMLInputElement
          this.info.push(contenu?.value)

          if(this.info[0]==this.lastinfo[0] &&this.info[1]==this.lastinfo[1] &&this.info[2]==this.lastinfo[2])
          {
             alert("aucune modification effectué")
          }else{
             console.log(this.id,this.info[0])
            this.crudalbumservice.update(this.id,this.info[0],this.info[1],this.info[2]).subscribe((data)=>{
                if(data.code==200){
                  alert(data.code)
                }else
                {
                  alert("erreur lors de la tentative de supprission")
                }
              })
            }
      }
  this.info=[]
}

}
