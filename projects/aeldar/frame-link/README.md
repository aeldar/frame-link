FrameLinkModule
===============

Usage
-----
Inside `AppModule` of the app import and confiure `FrameLinkModule` providing appId:
```typescript
import { FrameLinkModule } from 'frame-link';

@NgModule({
  // ...
  imports: [
    FrameLinkModule.forRoot({ appId: 'my-app-id' }),
  ],
})
```

Inside component:
```typescript
import { FrameLinkService } from 'frame-link';

export class AppComponent {
  constructor(private frameLinkService: FrameLinkService) {}
}
```
