import { Injectable, Optional } from '@angular/core';

@Injectable()
export class FrameLinkServiceConfig {
  appId: string;
}

@Injectable()
export class FrameLinkService {

  private appId;

  constructor(@Optional() config: FrameLinkServiceConfig) {
    console.log('Frame link service is being constructed.');
    if (config && config.appId) {
      this.appId = config.appId;
    } else {
      throw new Error('FrameLinkService: appId was not provided! Please see documentation on using FrameLinkService.');
    }
  }
}
