import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FulanoComponent } from './componentes/fulano/fulano.component';
import { PepeComponent } from './componentes/pepe/pepe.component';

const routes: Routes = [
  {path: '', component: PepeComponent},
  {path: 'fulano', component: FulanoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
