import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudAlbumComponent } from './crud-album/crud-album.component';
import { CrationAlbumComponent } from './cration-album/cration-album.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrudAlbumComponent,CrationAlbumComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'albumFrontend';
  creation=false
  test(a:number){
    if(a==0){
      this.creation=true
    }else{
      this.creation=false
    }

  }
}

