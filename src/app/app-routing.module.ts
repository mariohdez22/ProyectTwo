import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculadoraComponent} from "./calculadora/calculadora.component";
import {CalculadoComponent} from "./calculado/calculado.component";

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calculado', component: CalculadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
