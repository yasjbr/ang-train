import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor() { 
    console.log('service 2 is hereeeee');
  }

  typeSomeThing(mytext){
    console.log(mytext);
  }
}
