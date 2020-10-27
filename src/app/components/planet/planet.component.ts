import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FalconeGetterService } from '../../services/falcon-http/falcone-getter.service';
import { Planet, PlanetOutput } from '../../common/types';
import { scrollToBottom } from '../../common/functions';
import { FalconStoreService } from '../../services/falcon-store/falcon-store.service';
import { WizardService } from '../../services/wizard/wizard.service';
import { generateUniqueId } from '../../common/unique-id';
import { CachingService } from '../../services/caching-service/caching.service';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'fc-planet',
  animations: [
    trigger('state', [
      state('void, hidden', style({ transform: 'translateX(2000px)' })),
      state('visible', style({ transform: 'translateX(0px)',  })),
      transition('* => visible', animate('1s ease-in')),
      transition('* => hidden', animate('1s ease-in')),
    ])
  ],
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  //private variables
  private uniqueId: string;

  //public variables
  public visibility = "hidden";
  public planets: Planet[];
  public distance: number;
  
  @Output() returnPlanetEmit: EventEmitter<PlanetOutput> = new EventEmitter<PlanetOutput>();

  constructor(private falconeGetterService: FalconeGetterService, 
              private falconStoreService: FalconStoreService,
              private wizardService: WizardService,
              private cachingService: CachingService
         ) { 
                this.uniqueId = generateUniqueId ();
  }

  ngOnInit(): void {
    const timeOutTime = 200;
    let tempCached = this.cachingService.getCache("planets");
    if (tempCached) {
      this.planets = tempCached;
      this.visibility = 'visible';
      setTimeout (() => {scrollToBottom()}, timeOutTime);
    } else {
      this.falconeGetterService.getPlanets().then((planets) => {
        this.planets = planets
        this.cachingService.setCache ("planets", planets);
        this.visibility = 'visible';
        setTimeout (() => {scrollToBottom()}, timeOutTime);
      });
    }
    
    this.wizardService.getWizard().subscribe ((data) => {
      if (data === 1) {
        this.distance = null;
      }
    });
    
  }

  changeValue(planetName: string, planetDistance: number) {
    if (planetName && planetDistance) {
      this.distance = planetDistance;
      this.falconStoreService.setPlanet(planetName, this.uniqueId);
      let currentStep = this.wizardService.nextStep(this.uniqueId);
      this.returnPlanetEmit.emit({distance: planetDistance, currentStep: currentStep, uniqueId: this.uniqueId});
      this.planets.forEach ((planet) => {
        if (!planet.active) {
          planet.active =  '';
        }

        planet.active = planet.active.replace(this.uniqueId, '');

        if (planet.name === planetName) {
          planet.active += this.uniqueId;
        }
      });
    }
  }

}
