import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { FrameLinkService, FrameLinkServiceConfig } from './frame-link.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [FrameLinkService],
})
export class FrameLinkModule {
  constructor (@Optional() @SkipSelf() parentModule: FrameLinkModule) {
    if (parentModule) {
      throw new Error(
        'FrameLinkModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: FrameLinkServiceConfig): ModuleWithProviders {
    return {
      ngModule: FrameLinkModule,
      providers: [
        { provide: FrameLinkServiceConfig, useValue: config }
      ]
    };
  }
}
