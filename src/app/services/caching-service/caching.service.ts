import { Injectable } from '@angular/core';
import { Caching } from 'src/app/common/types';

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private cacheMap: Caching[] = [];

  constructor() { }

  private matchCache (id): Caching[] {
    if (this.cacheMap){
      return this.cacheMap.filter (cacheObj => {
        return cacheObj.cachingId === id
      });
    }
    return [];
  }

  public setCache (id: string, cachedObject: any) {
    let cacheTmp = this.matchCache (id);
    if (!cacheTmp.length) {
      this.cacheMap.push ({cachingId: id, cachedObject: cachedObject});
    } else {
      this.cacheMap.forEach(cacheMap => {
        cacheMap.cachedObject = cachedObject
      });
    }
  }

  public getCache (id: string):any {
    let cacheTmp = this.matchCache (id);
    if (cacheTmp.length) {
      return cacheTmp[0].cachedObject
    } else {
      return null;
    }
  }

  public resetCache () {
      this.cacheMap = [];
  }
}
