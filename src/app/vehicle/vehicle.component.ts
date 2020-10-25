import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FalconeGetterService } from '../services/falcon-http/falcone-getter.service';
import { FalconStoreService } from '../services/falcon-store/falcon-store.service';
import { Vehicle, VehicleOutput } from '../common/types';
import { WizardService } from '../services/wizard/wizard.service';
import { generateUniqueId } from '../common/unique-id';
import { CachingService } from '../services/caching-service/caching.service';

@Component({
  selector: 'fc-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnChanges {

  @Input () distance: number;
  @Input () key: string;

  @Output () nextStep: EventEmitter<VehicleOutput> = new EventEmitter<VehicleOutput>();
  
  public vehicle: Vehicle[];

  private uniqueId: string;

  constructor(private falconeGetterService: FalconeGetterService, 
                      private falconStoreService: FalconStoreService,
                      private wizardService: WizardService,
                      private cachingService: CachingService
                      ) {
                          this.uniqueId = generateUniqueId ();
  }

  ngOnInit(): void {
    let tempCached = this.cachingService.getCache("vehicles");
    if (tempCached) {
      this.vehicle = tempCached;
    } else {
      this.falconeGetterService.getVehicles().then (vehicles => {
        this.vehicle = vehicles;
        this.cachingService.setCache ("vehicles", vehicles);
      });
    }
 
  }

  ngOnChanges (changes: SimpleChanges) {
    console.log ('this.distance before: ', this.distance);
    this.distance = changes.distance.currentValue;
    console.log ('this.distance after: ', this.distance);
  }

  setVehicle(event, vehicleName: string) {

    console.log ('entered SetVehicle', event.target.value);

    if (event.target.value === 'on') {
      this.falconStoreService.setVehicle(vehicleName, this.uniqueId);
      let currentStep =  this.wizardService.nextStep(this.uniqueId);
      this.nextStep.emit({uniqueId: this.uniqueId, currentStep: currentStep});
    }
  }

}
