import { TestBed } from '@angular/core/testing';

import { UpladFileService } from './uplad-file.service';

describe('UpladFileService', () => {
  let service: UpladFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpladFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
