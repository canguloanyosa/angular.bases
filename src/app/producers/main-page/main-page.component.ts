import { Component, OnInit } from '@angular/core';

interface Producer {
  name: string;
  certified: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  producers: Producer[] = [
    {
      name: 'Juan Perez',
      certified: 2
    },
    {
      name: 'Jose Hidalgo',
      certified: 1
    }
  ];

  new: Producer = {
    name: '',
    certified: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agree() {
    console.log(`${this.new.name}`);
    this.producers.push(this.new);
    this.new = {
      name: '',
      certified: 0}
  }

}
