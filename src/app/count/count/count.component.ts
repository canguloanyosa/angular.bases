import {Component} from '@angular/core';

@Component({
    selector : "app-count",
    templateUrl : './count.component.html'
})
export class CountComponent {
    title : string = 'Count App';
    number : number = 0;
    base : number = 5;
  
    acumulator( value : number ) {
      this.number += value;
    }
}