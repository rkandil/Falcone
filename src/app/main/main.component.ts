import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { WizardService } from '../services/wizard/wizard.service';
import { FalconStoreService } from '../services/falcon-store/falcon-store.service';
import { FalconeGetterService } from '../services/falcon-http/falcone-getter.service';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../services/errors/error-service.service';
import { ErrorComponent } from '../error/error.component';
import { MatDialog } from '@angular/material/dialog';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { PlanetOutput, ComponentReference, VehicleOutput } from '../common/types';
import { PlanetComponent } from '../planet/planet.component';
import { isOldComponent, pushComponentReference, returnLatestComponentMatch } from '../common/unique-id';

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
  public returnedResult: Promise<any>;
  public token: string;
  public finalStep = false;

  @ViewChild("falcons", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;


  constructor(private wizardService: WizardService,
              private falconeGetterService: FalconeGetterService,
              private falconStoreService: FalconStoreService,
              private errorService: ErrorService,
              private dialog: MatDialog,
              private resolver: ComponentFactoryResolver
              ) { }

  ngOnInit(): void {
    this.wizardService.getWizard().subscribe(val => {
      this.currentStep = val;
      if (this.currentStep === 1) {

        this.falconeGetterService.getToken().then(token => {
          this.falconStoreService.setToken(token);
        }).then (() => {
          console.log ('entered here in then');
          //default token
          if (!this.falconStoreService.getToken()){
            this.falconStoreService.setToken(environment.token_default_value);
          }
        });
      }
    });

    this.errorService.getErrorObservable().subscribe((data: string)=> {
      if (data) {
        this.dialog.open(ErrorComponent, {data: data})
        this.errorMessage = data;
      }
    })
  }

  public findResult() {
      console.log ('entered findResult()');
    this.returnedResult = this.falconeGetterService.getResult();
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
    } else {
      this.finalStep = true;
    }
  }



  public changeOutputPlanet(data: PlanetOutput) {
          console.log ('changeOutputPlanet');

  
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