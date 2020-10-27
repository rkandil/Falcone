import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { MainComponent } from './components/main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { IdCreatorPipe } from './pipes/id-creator.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './components/error/error.component';
import { IconComponent } from './components/icon/icon.component';
import { TimerComponent } from './components/timer/timer.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    VehicleComponent,
    MainComponent,
    IdCreatorPipe,
    ErrorComponent,
    IconComponent,
    TimerComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
