import { TestBed } from '@angular/core/testing';

import { CrudAlbumService } from './crud-album.service';

describe('CrudAlbumService', () => {
  let service: CrudAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
