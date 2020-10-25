import { Injectable } from '@angular/core';
import { Falcons } from 'src/app/common/types';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../errors/error-service.service';
import { hasUniquId, setUniquId } from 'src/app/common/unique-id';

@Injectable({
  providedIn: 'root'
})
export class FalconStoreService {

  private returnFalcon:Falcons = {token: "", planet_names: [], vehicle_names: []};
  private readonly maximum_array_size = environment.maximum_number_steps/2;

  constructor(private errorService: ErrorService) { }

  setToken (token: string) {
    this.returnFalcon.token = token;
  }

  setPlanet (planetName: string, uniqueId: string) {
    console.log ('enteredhere');
    const prefix = 'store-planet';
    if (!hasUniquId (prefix, uniqueId)) {
      if (this.returnFalcon.planet_names.length < this.maximum_array_size) {
        this.returnFalcon.planet_names.push(planetName);
      } else {
        this.errorService.handleError(555);
      }
      setUniquId (prefix, uniqueId);
    } else {
      this.returnFalcon.planet_names.pop();
      this.returnFalcon.planet_names.push(planetName);
    }
    console.log ('this.returnFalcon = ', this.returnFalcon);
  }

  setVehicle (vehicleName: string, uniqueId: string) {
    const prefix = 'store-vehicle';
    if (!hasUniquId (prefix, uniqueId)) {
      if (this.returnFalcon.vehicle_names.length < this.maximum_array_size) {
        this.returnFalcon.vehicle_names.push(vehicleName);
      } else {
        this.errorService.handleError(555);
      }
      setUniquId (prefix, uniqueId);
    } else {
      //perform update
      this.returnFalcon.vehicle_names.pop();
      this.returnFalcon.vehicle_names.push(vehicleName);
    }
  }

  getPayLoad ():Falcons {
    return this.returnFalcon;
  }

  getToken() {
    return this.returnFalcon.token;
  }
}