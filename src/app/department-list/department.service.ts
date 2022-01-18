import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import{COUNTRIES} from './department'
@Injectable({
    providedIn: 'root'
  })
export class CountryService {
constructor(private http:HttpClient){}

    storeDeapartment(){
      const data  = COUNTRIES;
    this.http.put('https://my-app-project-6a9e7-default-rtdb.firebaseio.com/dep-list.json',data).subscribe
    ((res)=>{
      console.log(res);
    })
    }
}