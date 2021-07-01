import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Manzana',
        price: 2,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'Naranja',
        price: 3,
        quantity: 3,
        completed: true
      }
    ]
  }

}
