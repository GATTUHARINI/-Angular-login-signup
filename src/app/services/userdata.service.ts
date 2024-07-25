import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      {name:'harini',age:22,email:'harini@gmail.com'},
      {name:'harika',age:22,email:'harika@gmail.com'},
      {name:'Ak',age:22,email:'ak@gmail.com'},
      {name:'devi',age:22,email:'devi@gmail.com'}
    ]
  }
}
