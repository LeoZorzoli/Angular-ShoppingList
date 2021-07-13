import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

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

    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.getTotal()
  }

  getTotal() {
    this.total = this.items
                  .filter(i => !i.completed)
                  .map(i => i.quantity * i.price)
                  .reduce( (acc, i) => acc += i, 0);
  }

}
