import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TokenizedRequest = request.clone({
      setHeaders:{
        Authorization: `Bearer ${sessionStorage.getItem("Token")}`
      }
    })
    return next.handle(TokenizedRequest);
  }
}
