import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { hasUniquId, setUniquId } from 'src/app/common/unique-id';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  private currentStage = 1;

  private wiardSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(this.currentStage);

  constructor() { }

  nextStep (uniqueId: string):number {
    const prefix = 'wizard';
    if (!hasUniquId (prefix, uniqueId)) {
      this.wiardSubject$.next(++this.currentStage);
      //this.componentIds.add(uniqueId);
      setUniquId (prefix, uniqueId);
    }
    return this.currentStage;
  }

  resetWizard() {
    this.wiardSubject$.next(1);  
  }

  getWizard() {
    return this.wiardSubject$;
  }
}
