import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoExisteComponent } from './components/no-existe/no-existe.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'admin', component: DashboardComponent},
    {path: '404', component: NoExisteComponent},
    {path:'**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
