import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private trackingEnabled = true;
  constructor() {
    const trackingDisabled = localStorage.getItem('trackingDisabled');
    if (trackingDisabled === 'true') {
      this.trackingEnabled = false;
    }
    console.log('Tracking Enabled: ' + this.trackingEnabled);
  }

  disableTracking(): void {
    localStorage.setItem('trackingDisabled', 'true');
    this.trackingEnabled = false;
    console.log('Tracking Enabled: ' + this.trackingEnabled);
  }

  enableTracking(): void {
    localStorage.setItem('trackingDisabled', 'false');
    this.trackingEnabled = true;
    console.log('Tracking Enabled: ' + this.trackingEnabled);
  }

  getTrackingEnabled(): boolean {
    return this.trackingEnabled;
  }
}
