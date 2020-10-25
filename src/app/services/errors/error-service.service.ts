import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorCodes } from 'src/app/common/types';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

    private errorSubject: Subject <string> = new Subject<string>();
    private errorSubscriber$: Observable <string> = this.errorSubject.asObservable();
    private  numberOfErrors = 0;
    private interternetConnectivity = true;

    constructor(private http: HttpClient) { }

    readonly errors: ErrorCodes[]= [{
        errorCode: 408,
        errorMessage : 'Please check your internet connectivity and try again'
    }, {
        errorCode: 555,
        errorMessage: 'Size of array exceeded the maximum size'
    }

  ];

    private getErrorMessage (errorCode: number):string {
      let filteredErrorArray:ErrorCodes[] = (this.errors.filter (errors => errors.errorCode === errorCode));
      return filteredErrorArray
      .length > 0? filteredErrorArray[0].errorMessage:null;
    }


    handleError(error) {
      this.numberOfErrors++;
      if (this.numberOfErrors > 2 && this.interternetConnectivity) {
          //check internet connectivity by pinging Google
          this.http.get('https://www.google.com/').toPromise().catch(err=> {
              this.interternetConnectivity = false;
              this.handleError(408);
          })
      }
      const errorMessage = this.getErrorMessage(error) || environment.default_error_message;
      this.errorSubject.next(errorMessage);
    }

    getErrorObservable ():Observable <string> {
      return this.errorSubscriber$;
    }

}
