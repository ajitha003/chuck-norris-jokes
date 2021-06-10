import { Injectable } from '@angular/core';
import{SharedServiceService}from '../shared-service.service'
@Injectable({
  providedIn: 'root'
})
export class JokesServiceService {
   
  constructor(private sharedservice:SharedServiceService) { }

  GetJokesCategory()
  {
    return this.sharedservice.Get("categories");
  }

  GetRandomJokes(searchcategory:any)
  {
    if(searchcategory!="")
      return this.sharedservice.Get("random?category="+searchcategory);
    return  this.sharedservice.Get("random"); 
  }

  GetSearch(search:any)
  {
    return this.sharedservice.Get("search?query="+search);
  }
}
