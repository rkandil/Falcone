import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: 'falcone-game', component: MainComponent },
  { path: 'falcone-result', component: ResultComponent },
  { path: '',   redirectTo: '/falcone-game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
