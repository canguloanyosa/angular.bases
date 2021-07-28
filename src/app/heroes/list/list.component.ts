import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  heroes : string [] = ['Spiderman', 'Ironman', 'Hulk'];
  heroClear : string = '';

  clearElement() : void {
    this.heroClear = this.heroes.shift() || '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
