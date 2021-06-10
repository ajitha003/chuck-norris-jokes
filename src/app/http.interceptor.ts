import{Injectable}from '@angular/core'
import{HttpEvent,HttpInterceptor,HttpHandler,HttpRequest, HttpErrorResponse, HttpResponse}from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import{environment} from '../environments/environment';
import{catchError, map}from 'rxjs/Operators'
import{ErrorResponseService}from './error-response/error-response.service'
@Injectable()
export class AuthheaderInterceptor implements HttpInterceptor{

    constructor(private errorresponseService:ErrorResponseService){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

          request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
          request = request.clone({ headers: request.headers.set('x-rapidapi-key', environment.rapidapikey) });
          request = request.clone({ headers: request.headers.set('x-rapidapi-host', environment.rapidapihost) });
          request = request.clone({ headers: request.headers.set('useQueryString',"true") });
          const url=request.clone({url:environment.baseUrl+request.url});

          return next.handle(url).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
            }
            return event;
        }), 
        catchError((error: HttpErrorResponse) => {
              

            let data = {};
            data = {
                reason: error && error.error && error.error.reason ? error.error.reason : 'unCaught error',
                status: error.status
            };
           this.errorresponseService.openDialog(data);
           
            return throwError(error);
        }));
    }

}