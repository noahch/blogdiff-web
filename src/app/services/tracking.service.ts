import { Injectable } from '@angular/core';
import {TrackingEvent} from '../model/model';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private trackingEnabled = true;
  currentTracking: TrackingEvent = null;
  currentTrackingStart: Date = null;

  constructor(private dataService: DataService) {
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

  createNewTrackingEvent(): TrackingEvent {
    this.finishOpenEvent();
    this.currentTracking = new TrackingEvent();
    this.currentTrackingStart = new Date();
    return this.currentTracking;
  }

  finishOpenEvent() {
    if (this.currentTracking !== null) {
      const now = new Date();
      this.currentTracking.timeSpent = now.getTime() - this.currentTrackingStart.getTime();
      if (this.trackingEnabled) {
        this.dataService.saveTracking(this.currentTracking);
      }
    }
  }
}
