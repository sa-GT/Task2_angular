import { Component } from '@angular/core';
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-showcategory',
  standalone: false,
  templateUrl: './showcategory.component.html',
  styleUrl: './showcategory.component.css'
})
export class ShowcategoryComponent {
  constructor(private _cat: CatService) { }

  ngOnInit() {
    this.getcatt()
  }

  categories: any

  getcatt() {
    this._cat.getCat().subscribe((data) => {
      this.categories = data
    })
  }
}
