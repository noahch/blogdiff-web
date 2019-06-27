import { Component, OnInit } from '@angular/core';
import {TrackingService} from '../services/tracking.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  currentTrackingEnabled = true;
  userId = null;
  showUserId = false;
  constructor(private tracking: TrackingService) { }

  ngOnInit() {
    this.currentTrackingEnabled = this.tracking.getTrackingEnabled();
    this.userId = localStorage.getItem('userId');
  }

  disableTracking(): void {
    this.tracking.disableTracking();
    this.currentTrackingEnabled = false;
  }

  enableTracking(): void {
    this.tracking.enableTracking();
    this.currentTrackingEnabled = true;
  }
}
