import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap, combineAll } from 'rxjs/operators';

export class LoggingIntercaptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing requset');
        console.log('url');
        console.log('headers');
        return next.handle(req).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log('Incoming response');
                console.log(event.body);
            }
        }));
    }
}