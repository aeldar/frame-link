import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameLinkModule } from 'frame-link';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrameLinkModule.forRoot({ appId: 'my-app-id' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
