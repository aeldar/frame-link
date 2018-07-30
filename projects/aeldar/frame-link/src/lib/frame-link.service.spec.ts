import { TestBed, inject } from '@angular/core/testing';

import { FrameLinkService, FrameLinkServiceConfig } from './frame-link.service';

describe('FrameLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FrameLinkService,
        {
          provide: FrameLinkServiceConfig,
          useValue: { appId: 'hello' },
        },
      ]
    });
  });

  it('should be created', inject([FrameLinkService], (service: FrameLinkService) => {
    expect(service).toBeTruthy();
  }));
});
