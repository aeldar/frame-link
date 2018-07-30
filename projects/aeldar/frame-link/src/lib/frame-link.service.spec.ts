import { TestBed, inject } from '@angular/core/testing';

import { FrameLinkService } from './frame-link.service';

describe('FrameLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrameLinkService]
    });
  });

  it('should be created', inject([FrameLinkService], (service: FrameLinkService) => {
    expect(service).toBeTruthy();
  }));
});
