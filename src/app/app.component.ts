import {Component, HostListener} from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {TrackingService} from './services/tracking.service';

library.add(fas);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogdiff-web';

  constructor(private trackingService: TrackingService) {}
  // Will later be used to send user statistics to the backend, when the user leaves the page
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
    this.trackingService.finishOpenEvent();
  }
}
