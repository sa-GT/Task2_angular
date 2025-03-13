import { Component } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories: any;
  constructor(private _ser: CatService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this._ser.getCat().subscribe((data) => {
      this.categories = data;
    });
  }
}
