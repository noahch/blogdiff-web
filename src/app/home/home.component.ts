import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TrackingService} from '../services/tracking.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../services/data.service';
import {ContactEmail} from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentTrackingEnabled = true;
  emailForm: FormGroup;
  submitted = false;
  emailSubmitted = false;

  constructor(private sanitizer: DomSanitizer, private tracking: TrackingService, private formBuilder: FormBuilder, private dataService: DataService) {  }
  ngOnInit() {
    this.currentTrackingEnabled = this.tracking.getTrackingEnabled();
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  disableTracking(): void {
    this.tracking.disableTracking();
    this.currentTrackingEnabled = false;
  }

 enableTracking(): void {
    this.tracking.enableTracking();
   this.currentTrackingEnabled = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.emailForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.emailForm.invalid) {
      return;
    }
    const contact = new ContactEmail(this.emailForm.get('email').value);
    this.dataService.contactEmail(contact);
    this.emailSubmitted = true;
  }

}
