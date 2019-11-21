import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtUnAuthorizedInterceptorServiceService implements HttpInterceptor {
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    return next.handle(request).pipe(tap(
      (event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse){

        }
      },
      (error:any)=>{
        if(error.status==401)
        {
          console.log(error);
          alert("401 error unauthorized");
        }
      }
    ));
  }
  constructor() { }
}
