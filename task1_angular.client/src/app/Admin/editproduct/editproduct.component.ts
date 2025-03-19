import { Component } from '@angular/core';
import { CatService } from '../../cat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  standalone: false,
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  constructor(private _Ahmad: CatService, private _Rahaf: Router, private _Hala: ActivatedRoute) { }

  ngOnInit() {
    const product_id = this._Hala.snapshot.paramMap.get("id")

    this._Ahmad.getproductdetailed().subscribe((data) => {
      this.product = data.find((Rahaf: any) => Rahaf.id == product_id)
    })
  }

  //methodعشان نعمل update على product
  product:any
  updatepro() {
    this._Ahmad.updateproduct(this.product.id, this.product).subscribe(() => {
      alert("Ahmad work")
      this._Rahaf.navigate(['/dashboard/showpro'])
    })
  }
}
