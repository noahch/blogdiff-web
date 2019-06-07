import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import {LoadingService} from '../services/loading.service';


@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {

  activeRequests: number = 0;

  constructor(private loadingScreenService: LoadingService) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingScreenService.startLoading();
      console.log('start loading');
    }

    this.activeRequests++;
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingScreenService.stopLoading();
          console.log('stop loading');
        }
      })
    );
  }



}
