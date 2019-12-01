import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService  implements HttpInterceptor{
 
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
console.log("i am inside intercepter")
    // var currentUser={token:" "};
    if(!sessionStorage.currentUser){
      // currentUser=JSON.parse(sessionStorage.currentUser);
      return EMPTY;
    }
    // request=request.clone(
    //   {
    //     setHeaders:{
    //       Authorization:"Bearer" + currentUser.token
    //     }
    //   }
    // );


    return next.handle(request);
  }
  
  
  constructor() { }

 
}
