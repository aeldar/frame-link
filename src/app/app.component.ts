import { Component } from '@angular/core';
import { FrameLinkService } from 'frame-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frame-link-demo';

  constructor(private frameLinkService: FrameLinkService) {
    
  }
}
