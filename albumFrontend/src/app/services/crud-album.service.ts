import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudAlbumService {

  constructor(private httpclient:HttpClient) {   }
   getAllAlbum():Observable<any[]>{
    return this.httpclient.get<any[]>('http://localhost:8000/api/listAlbum');
   }

   createAllbum(nom:string,prenom:string,titre:string):Observable<any>{
    var data =new FormData
    data.append('nom',nom)
    data.append('prenom',prenom)
    data.append('titre',titre)
    return this.httpclient.post('http://localhost:8000/api/creationAlbum',data);
   }

   supprimerAlbum(id:any):Observable<any>{
    var data = new FormData
    data.append('id',id)
    return this.httpclient.post('http://localhost:8000/api/suppressionAlbum',data);
   }

   update(id:string,nom:string,prenom:string,titre:string):Observable<any>{
    var data =new FormData
    data.append('id',id)
    data.append('nom',nom)
    data.append('prenom',prenom)
    data.append('titre',titre)
    return this.httpclient.post('http://localhost:8000/api/modificationAlbum',data);
   }
}
