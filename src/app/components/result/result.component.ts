import { Component, OnInit } from '@angular/core';
import { FalconeGetterService } from 'src/app/services/falcon-http/falcone-getter.service';
import { FalconStoreService } from 'src/app/services/falcon-store/falcon-store.service';
import { WizardService } from 'src/app/services/wizard/wizard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public returnResult: string;
  public success = true;
  public timeTaken: number;

  constructor(private falconeGetterService: FalconeGetterService,
              private falconStoreService: FalconStoreService,
              private wizardService: WizardService, 
              private router: Router) { }


  ngOnInit(): void {
    this.falconeGetterService.getResult().then(data => {

      this.returnResult = data.planet;

      let returnArray = this.falconStoreService.getPayLoad().planet_names.filter (data => {
        return data === this.returnResult;
      });

      if (returnArray.length === 0) {
        this.success = false;
      } else {
        this.timeTaken = this.falconStoreService.getTime();
      }
      this.wizardService.resetWizard();
      this.falconStoreService.resetStore();
  });

  }

}
