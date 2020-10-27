import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { WizardService } from 'src/app/services/wizard/wizard.service';
import { environment } from 'src/environments/environment';
import { FalconStoreService } from 'src/app/services/falcon-store/falcon-store.service';

@Component({
  selector: 'fc-timer',
  animations: [
    trigger('state', [
      state('void, hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('* => visible', animate('5s ease-in')),
      transition('* => hidden', animate('5s ease-in')),
    ])
  ],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  private initialTime: number;
  private interval;

  public time: number; 
  public visibility= "hidden";
 

  constructor(private wizardService: WizardService,
              private falconStoreService: FalconStoreService ) { 
    this.initialTime = new Date().getTime();
  }

  ngOnInit(): void {
    this.interval = setInterval (() => {
      this.time = Math.floor((new Date().getTime() - this.initialTime)/1000);
      this.visibility = 'visible';
    }, 1000);
    this.wizardService.getWizard().subscribe (data => {
      if (data === 1) {
        this.initialTime = new Date().getTime();
      } else if (data > environment.maximum_number_steps ) {
        this.falconStoreService.setTime(this.time);
      }
    });
  }
  
  ngOnDestroy (): void {
    clearInterval(this.interval);
  }
}
