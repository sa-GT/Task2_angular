import { Component } from '@angular/core';
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-showproduct',
  standalone: false,
  templateUrl: './showproduct.component.html',
  styleUrl: './showproduct.component.css'
})
export class ShowproductComponent {
  constructor(private _serv: CatService) { }

  ngOnInit() {
    this.getp()
  }

  products: any

  getp() {
    this._serv.getproductbyid().subscribe((data) => {
      this.products = data
    })
  }
}
