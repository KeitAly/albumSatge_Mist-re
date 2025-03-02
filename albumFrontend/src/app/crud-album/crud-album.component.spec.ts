import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlbumComponent } from './crud-album.component';

describe('CrudAlbumComponent', () => {
  let component: CrudAlbumComponent;
  let fixture: ComponentFixture<CrudAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
