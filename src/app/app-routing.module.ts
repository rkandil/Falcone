import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/result/result.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';

const routes: Routes = [
  { path: 'falcone-difficulty', component: DifficultyComponent},
  { path: 'falcone-game', component: MainComponent },
  { path: 'falcone-result', component: ResultComponent },
  { path: '',   redirectTo: '/falcone-difficulty', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
