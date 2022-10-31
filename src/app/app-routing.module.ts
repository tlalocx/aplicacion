import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionBosqueComponent } from './seccion-bosque/seccion-bosque.component';
import { SeccionFoldComponent } from './seccion-fold/seccion-fold.component';
import { SeccionSphynxComponent } from './seccion-sphynx/seccion-sphynx.component';

const routes: Routes = [
  { path: 'bosque', component: SeccionBosqueComponent },
  { path: 'fold', component: SeccionFoldComponent }, 
  { path: 'sphynx', component: SeccionSphynxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
