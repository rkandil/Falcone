import { Injectable } from '@angular/core';
import { Falcons } from 'src/app/common/types';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../errors/error-service.service';
import { hasUniquId, setUniquId } from 'src/app/common/unique-id';

@Injectable({
  providedIn: 'root'
})
export class FalconStoreService {
  private returnFalcon:Falcons = {token: "", planet_names: [], vehicle_names: [], time: 0, maximum_number_steps: 0};

  constructor(private errorService: ErrorService) { }

  private getMaximumArraySize ():number {
    return this.getDifficulty ()/2;
  }

  setToken (token: string) {
    this.returnFalcon.token = token;
  }

  resetStore () {
    this.returnFalcon.token="";
    this.returnFalcon.planet_names = [];
    this.returnFalcon.vehicle_names = [];
  }

  setPlanet (planetName: string, uniqueId: string) {
    const prefix = 'store-planet';
    if (!hasUniquId (prefix, uniqueId)) {
      if (this.returnFalcon.planet_names.length < this.getMaximumArraySize()) {
        this.returnFalcon.planet_names.push(planetName);
      } else {
        this.errorService.handleError(555);
      }
      setUniquId (prefix, uniqueId);
    } else {
      this.returnFalcon.planet_names.pop();
      this.returnFalcon.planet_names.push(planetName);
    }
  }

  setVehicle (vehicleName: string, uniqueId: string) {
    const prefix = 'store-vehicle';
    if (!hasUniquId (prefix, uniqueId)) {
      if (this.returnFalcon.vehicle_names.length < this.getMaximumArraySize()) {
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

  setTime (time: number) {
    this.returnFalcon.time = time;
  }

  getTime(): number {
    return this.returnFalcon.time;
  }

  setDifficulty (maximum_steps: number) {
    this.returnFalcon.maximum_number_steps = maximum_steps;
  }

  getDifficulty (): number {
    return this.returnFalcon.maximum_number_steps;
  }
}
