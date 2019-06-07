import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoadingService} from '../../services/loading.service';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/internal/operators';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, OnDestroy{

  loading = false;
  loadingSubscription: Subscription;

  constructor(private loadingScreenService: LoadingService) {
  }

  ngOnInit() {
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(
      debounceTime(200)
    ).subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
