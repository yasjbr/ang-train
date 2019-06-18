import { Component } from '@angular/core';
import { New2Component } from './new2/new2.component';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';
import {enableProdMode} from '@angular/core';

enableProdMode();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'train2';
  name = 'yaseen';
  

  constructor(private Service1: Service1Service, Service2: Service2Service) {
    Service2.typeSomeThing('name');
    this.printOnConsole();
  }

  printOnConsole(){
    console.log('+++'+this.name);
  }

  show(){
    console.log(this.name);
  }
}
