import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FalconeGetterService } from '../services/falcon-http/falcone-getter.service';
import { Planet, PlanetOutput } from '../common/types';
import { FalconStoreService } from '../services/falcon-store/falcon-store.service';
import { WizardService } from '../services/wizard/wizard.service';
import { generateUniqueId } from '../common/unique-id';
import { CachingService } from '../services/caching-service/caching.service';

@Component({
  selector: 'fc-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planets: Planet[];
  private uniqueId: string;
  @Output() returnPlanetEmit: EventEmitter<PlanetOutput> = new EventEmitter<PlanetOutput>();

  constructor(private falconeGetterService: FalconeGetterService, 
              private falconStoreService: FalconStoreService,
              private wizardService: WizardService,
              private cachingService: CachingService
         ) { 
                this.uniqueId = generateUniqueId ();
  }

  ngOnInit(): void {
    let tempCached = this.cachingService.getCache("planets");
    console.log ("tempCached", tempCached);
    if (tempCached) {
      this.planets = tempCached;
    } else {
      this.falconeGetterService.getPlanets().then((planets) => {
        this.planets = planets
        this.cachingService.setCache ("planets", planets);
      });
    }
  }

  changeValue(planet) {
      console.log ('entered here, I hope, ',planet.target.value );
    if (planet) {
      let planetName = planet.target.value.split (':::$$$:::')[0];
      let planetDistance = parseInt(planet.target.value.split (':::$$$:::')[1])
      this.falconStoreService.setPlanet(planetName, this.uniqueId);
      let currentStep = this.wizardService.nextStep(this.uniqueId);
      console.log ('returnFalcon = ', {distance: planetDistance, currentStep: currentStep, uniqueId: this.uniqueId})
      this.returnPlanetEmit.emit({distance: planetDistance, currentStep: currentStep, uniqueId: this.uniqueId});
    }
  }

}
