import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chiled',
  standalone: false,
  templateUrl: './chiled.component.html',
  styleUrl: './chiled.component.css'
})
export class ChiledComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
