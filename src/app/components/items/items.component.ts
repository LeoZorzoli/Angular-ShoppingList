import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal();
    });
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.itemService.delteItem(item).subscribe();
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.itemService.toggleItem(item).subscribe();
    this.getTotal()
  }

  getTotal() {
    this.total = this.items
                  .filter(i => !i.completed)
                  .map(i => i.quantity * i.price)
                  .reduce( (acc, i) => acc += i, 0);
  }

}
