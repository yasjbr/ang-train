import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Service1Service {

  constructor() { 
    
    console.log('this is a message from service 1');
  }
}
