import { Component, OnInit } from '@angular/core';
import{Jokes}from '../Models/jokes';
import{JokesServiceService}from './jokes-service.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokesModel:Jokes=new Jokes();
  jokesList:Jokes[]=[];
  jokecategory:any[]=[];
  loading:boolean=false;
  totalRecords:number=0;
  pageNumber:number=1;
  pageSize:number=1;
  searchquery="";
  searchEnabled:boolean=false;
 
  constructor(public jokesService:JokesServiceService) { }

  ngOnInit(): void {
     this.searchEnabled=false;
this.GetJokesCategory();
this.GetRandomJoke("");
   
  }

  onSubmit(){
  
    console.log("s",this.searchquery.length)
   if(this.searchquery.length>=3||(this.searchquery!=""&&this.searchquery.length>=3)){
      this.GetSearch(this.searchquery);
   }
   else{
    const error: HTMLElement = document.getElementById('error') as HTMLElement
    error.innerHTML = 'Minimum 3 Character required';
    setTimeout(() => {
      error.innerHTML = '';
     
     }, 5000); 
   
   }
  }
  GetJokesCategory(){
    this.loading=true;
    this.jokesService.GetJokesCategory().subscribe((data: any) => {
      this.jokecategory=data as any;
      this.jokecategory.push("random");
      this.loading=false;

    });

  }
  GetRandomJoke(search:any){
    this.loading=true;
    if(search=="random")
       search="";
    this.jokesService.GetRandomJokes(search).subscribe((data: any)=>{
        this.jokesModel=data;
        this.loading=false;
    });
    
}
GetSearch(search:string)
{ 
  this.loading=true;
   this.searchEnabled=true;
  this.jokesService.GetSearch(search).subscribe((data: any)=>{
    this.jokesList=data.result as Jokes[];
    this.loading=false;
    if(data.result.length==0){
      Swal.fire({
        title: 'No Results',
        text: "'Nothing Related to Your Search'",
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok!',
        allowOutsideClick:false,
        allowEnterKey:false
      }).then((result: { isConfirmed: any; }) => {
        
        if (result.isConfirmed) {
          location.reload();
        }
       
      })      
      setTimeout(() => {
        location.reload();
       }, 5000);     
    
  }
   this.totalRecords=data.result.length;
});

}



}
