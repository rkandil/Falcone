import { Component, OnInit } from '@angular/core';
import { FalconStoreService } from 'src/app/services/falcon-store/falcon-store.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { WizardService } from 'src/app/services/wizard/wizard.service';

@Component({
  selector: 'fc-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent implements OnInit {

  public difficultyLevel: string;

  constructor(private falconeStoreService: FalconStoreService, 
              private router: Router, 
              private wizardService: WizardService) { }

  ngOnInit(): void {
  }

  public setDifficulty (difficultyLevel: string) {
    this.difficultyLevel = difficultyLevel;
  }

  public startGame () {
    this.falconeStoreService.setDifficulty(environment['maximum_number_steps_' + this.difficultyLevel]);
    this.wizardService.resetWizard();
    this.router.navigate(['/falcone-game']);
  }

}
