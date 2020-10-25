import { ComponentReference } from './types';

let count = 0;
let componentIds = new Set <string>();
let componentMatch: ComponentReference[] = [];
let createdComponentsIds: ComponentReference[] = [];

export function isOldComponent (uniqueId: string): boolean {
    componentMatch = createdComponentsIds.filter(componentRef=> {
      return componentRef.uniqueId === uniqueId
    });

    return componentMatch.length === 0;
  }

  export function returnLatestComponentMatch():any {
      if (componentMatch[0] && componentMatch[0].vehiclePlanetCompnent){
        return componentMatch[0].vehiclePlanetCompnent;
      }
      return null;
  }

export function pushComponentReference (uniqueId: string, vehiclePlanetComponent: any) {
    createdComponentsIds.push ({uniqueId: uniqueId, vehiclePlanetCompnent: vehiclePlanetComponent});  
}

export function generateUniqueId ():string {
    return 'component' + count++;
}

export function setUniquId (prefix: string, uniqueId: string) {
    componentIds.add(prefix + '-' + uniqueId);
}

export function hasUniquId (prefix: string, uniqueId: string):boolean {
    return componentIds.has(prefix + '-' + uniqueId);
}