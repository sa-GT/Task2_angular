import { Component } from '@angular/core';
import { CatService } from '../cat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private _sev: CatService, private clientt: ActivatedRoute) { }

  ngOnInit() {
    this.getproduct();
  }
  products: any;
  catid: any;

  getproduct() {
    this.catid = this.clientt.snapshot.paramMap.get("id");
    this._sev.getproductbyid().subscribe((data) => {
      this.products = data.filter((x: any) => x.categoryId == this.catid);
    })
  }
}
