import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet, Vehicle, Token, Result } from '../../common/types';
import { map } from 'rxjs/operators';
import { FalconStoreService } from '../falcon-store/falcon-store.service';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../errors/error-service.service';

@Injectable({
  providedIn: 'root'
})
export class FalconeGetterService {

  constructor(private http: HttpClient, 
              private falconStoreService: FalconStoreService, 
              private errorService: ErrorService) { }

  getPlanets ():Promise <Planet[]> {
    return this.http.get(environment.planets_url).pipe(map(data=> {return data as Planet[]}))
      .toPromise().catch(err=> {
        let error:number;
        if (err.response && err.response.status===408 ) {
          error = err.response.status;
        }
        this.errorService.handleError(error || 0);
        return null;
      });
  }

  getVehicles ():Promise <Vehicle[]> {
    return this.http.get(environment.vehicle_url).pipe(map(data=> {return data as Vehicle[]}))
    .toPromise().catch(err=> {
      let error:number;
      if (err.response && err.response.status===408 ) {
        error = err.response.status;
      }
      this.errorService.handleError(error || 0);
      return null;
    });  
  }

  getResult (): Promise<Result> {

    return this.http.get (environment.end_result_url).pipe(map(data=> {
                   let random = Math.floor(Math.random( ) * (data as Result[]).length);
                   return  data[random] as Result;
                  }))
                  .toPromise() 
                  .catch(err=> {
                    let error:number;
                    if (err.response && err.response.status===408 ) {
                      error = err.response.status;
                    }
                    this.errorService.handleError(error || 0);
                    return null;
                  });
  }

  getToken (): Promise<string> {
    return this.http.get(environment.get_token).pipe(map(data=> {return (data as Token).token}))
        .toPromise().catch(err=> {
          let error:number;
          if (err.response && err.response.status===408 ) {
            error = err.response.status;
          }
          this.errorService.handleError(error || 0);
          return null;
        });
  }
}
