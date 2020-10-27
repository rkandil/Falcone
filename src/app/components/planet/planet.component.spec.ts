import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetComponent } from './planet.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FalconeGetterService } from 'src/app/services/falcon-http/falcone-getter.service';

describe('PlanetComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetComponent ],
      imports: [HttpClientModule, BrowserAnimationsModule],
      providers: [HttpClient, {provide: FalconeGetterService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should return six values', () => {
    TestBed.inject()
    this.falconeGetterService.getPlanets().then((planets) => {
     expect(planets.length).toEqual(6);
    })
  });
  
});
