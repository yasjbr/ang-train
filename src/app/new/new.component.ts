import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'new',
    templateUrl: 'new.component.html',
    styleUrls: ['new.component.css']
})


export class NewComponent implements OnInit{

    ngOnInit(): void {
         
    }



    constructor(){
        console.log('hello i am new  ')
    }


    
}
