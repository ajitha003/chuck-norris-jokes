import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './jokes.component';
import{JokesServiceService}from './jokes-service.service'
import{jokesroutingModule}from './jokes-routingModule'
import { MatCardModule} from '@angular/material/card';  
import { MatButtonModule} from '@angular/material/button';  
import{FormsModule,ReactiveFormsModule} from'@angular/forms';
import { JokesSearchComponent } from './jokes-search/jokes-search.component';
import{NgxPaginationModule}from 'ngx-pagination'
@NgModule({
  declarations: [
    JokesComponent,
    JokesSearchComponent
  ],
  imports: [
    CommonModule,
    jokesroutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  exports:[JokesComponent],
  providers:[JokesServiceService]
})
export class JokesModuleModule { }
