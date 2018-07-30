import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';

interface Link {
  tell: (channel: string) => <T>(what: T) => void;
  ask: (channel: string) => <T, U>(what: T) => Observable<U>;
  listen: (channel: string) => <T>(what: T) => void;
}

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

  linkTo(id: string): Link {
    return {
      tell: (channel) => (what) => { /* TODO */ },
      ask: (channel) => (what) => { /* TODO */ return null; },
      listen: (channel) => (what) => { /* TODO */ return null; },
    };
  }
}
