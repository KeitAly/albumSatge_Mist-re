import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrationAlbumComponent } from './cration-album.component';

describe('CrationAlbumComponent', () => {
  let component: CrationAlbumComponent;
  let fixture: ComponentFixture<CrationAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrationAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrationAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
