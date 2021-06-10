import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{JokesComponent}from './jokes.component'
import{JokesSearchComponent}from './jokes-search/jokes-search.component'
const routes: Routes = [
    // {path:"",component:JokesComponent},
    {path:"",component:JokesComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class jokesroutingModule { }