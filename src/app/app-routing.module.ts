import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionBosqueComponent } from './seccion-bosque/seccion-bosque.component';
import { SeccionFoldComponent } from './seccion-fold/seccion-fold.component';
import { SeccionSphynxComponent } from './seccion-sphynx/seccion-sphynx.component';

const routes: Routes = [
  { path: 'seccionBosque', component: SeccionBosqueComponent },
  { path: 'seccionFold', component: SeccionFoldComponent }, 
  { path: 'seccionSphynx', component: SeccionSphynxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
