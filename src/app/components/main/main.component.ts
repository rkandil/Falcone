import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef, Renderer2 } from '@angular/core';
import { WizardService } from '../../services/wizard/wizard.service';
import { FalconStoreService } from '../../services/falcon-store/falcon-store.service';
import { FalconeGetterService } from '../../services/falcon-http/falcone-getter.service';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../../services/errors/error-service.service';
import { ErrorComponent } from '../error/error.component';
import { MatDialog } from '@angular/material/dialog';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { PlanetOutput, ComponentReference, VehicleOutput } from '../../common/types';
import { PlanetComponent } from '../planet/planet.component';
import { isOldComponent, pushComponentReference, returnLatestComponentMatch, generateUniqueId, getArrayOfComponents, resetComponentArray } from '../../common/unique-id';
import { CachingService } from 'src/app/services/caching-service/caching.service';
import { Router } from '@angular/router';


@Component({
  selector: 'fal-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private errorMessage: string;

  public firstVehicle: number;
  public secondVehicle: number;
  public thirdVehicle: number;
  public fourthVehicle: number;
  public currentStep: number;
  public returnedResult: string;
  public returnedPlanet: string;
  public token: string;
  private uniqueId: string;
  public maximumNumberOfSteps: number;

  @ViewChild("falcons", { read: ViewContainerRef }) container;
  @ViewChild("falconsMainContainer") mainContainer;

  componentRef: ComponentRef<any>;


  constructor(private wizardService: WizardService,
              private falconeGetterService: FalconeGetterService,
              private falconStoreService: FalconStoreService,
              private errorService: ErrorService,
              private dialog: MatDialog,
              private resolver: ComponentFactoryResolver,
              private cachingService: CachingService,
              private router: Router
              ) {
                this.uniqueId = generateUniqueId ();
              }

  ngOnInit(): void {
    this.maximumNumberOfSteps = environment.maximum_number_steps;
    this.wizardService.getWizard().subscribe(val => {
      this.currentStep = val;
      if (this.currentStep === 1) {
        this.falconeGetterService.getToken().then(token => {
          this.falconStoreService.setToken(token);
        }).then (() => {
          //default token
          if (!this.falconStoreService.getToken()){
            this.falconStoreService.setToken(environment.token_default_value);
          }
        });
      } else if (this.currentStep  > this.maximumNumberOfSteps) {
        this.cachingService.resetCache();
        this.router.navigate(['falcone-result']);
      }
    });

    this.errorService.getErrorObservable().subscribe((data: string)=> {
      if (data) {
        this.dialog.open(ErrorComponent, {data: data})
        this.errorMessage = data;
      }
    })

    
  }



  public changeOutputVehicle(data: VehicleOutput) {
    if (data.currentStep <= environment.maximum_number_steps){
      if (isOldComponent (data.uniqueId)){
        const factory: ComponentFactory<PlanetComponent> = this.resolver.resolveComponentFactory(PlanetComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.returnPlanetEmit.subscribe (event => {
          this.changeOutputPlanet(event);
        });
        pushComponentReference(data.uniqueId, this.componentRef);

        
      }
    }
  }
  

  public refreshGame() {
    getArrayOfComponents ().forEach(comp => {
      comp.destroy ();
    });
    this.wizardService.resetWizard();
    this.falconStoreService.resetStore();
    resetComponentArray ();
    this.cachingService.getCache("planets").forEach(
      (planet)=> {
        planet.active = '';
      }
    );
  }

  public changeOutputPlanet(data: PlanetOutput) {
      if (isOldComponent (data.uniqueId)){
        const factory: ComponentFactory<VehicleComponent> = this.resolver.resolveComponentFactory(VehicleComponent);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.key = "vehicle" + data.uniqueId;
        this.componentRef.instance.distance = data.distance;

        this.componentRef.instance.nextStep.subscribe(val => {
          this.changeOutputVehicle(val);
        }); 
        pushComponentReference(data.uniqueId, this.componentRef);
        
      } else {
        returnLatestComponentMatch().instance.distance = data.distance;
      }
  }

}
