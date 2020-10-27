import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FalconeGetterService } from '../../services/falcon-http/falcone-getter.service';
import { FalconStoreService } from '../../services/falcon-store/falcon-store.service';
import { Vehicle, VehicleOutput } from '../../common/types';
import { WizardService } from '../../services/wizard/wizard.service';
import { generateUniqueId } from '../../common/unique-id';
import { CachingService } from '../../services/caching-service/caching.service';
import { scrollToBottom } from '../../common/functions';


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
    const timeOutTime = 200;
    let tempCached = this.cachingService.getCache("vehicles");
    if (tempCached) {
      this.vehicle = tempCached;
      setTimeout (() => {scrollToBottom()}, timeOutTime);
    } else {
      this.falconeGetterService.getVehicles().then (vehicles => {
        this.vehicle = vehicles;
        this.cachingService.setCache ("vehicles", vehicles);
        setTimeout (() => {scrollToBottom()}, timeOutTime);
      });
    }
 
  }

  ngOnChanges (changes: SimpleChanges) {
    this.distance = changes.distance.currentValue;
  }

  setVehicle(event, vehicleName: string) {

    if (event.target.value === 'on') {
      this.falconStoreService.setVehicle(vehicleName, this.uniqueId);
      let currentStep =  this.wizardService.nextStep(this.uniqueId);
      this.nextStep.emit({uniqueId: this.uniqueId, currentStep: currentStep});
    }
  }

}
