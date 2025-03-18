import { Component } from '@angular/core';
import { CatService } from '../../cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private _serv: CatService, private _rou: Router) { }

  ngOnInit() {
    this.getcatt()
  }

  addproduct(data: any) {
    this._serv.postproduct(data).subscribe(() => {
      alert("product added successfully");
    })
  }
  categories: any
  getcatt() {
    this._serv.getCat().subscribe((data) => {
      this.categories = data
      //this._rou.navigate(['/dashboard/showpro'])//اذا طلعلك انو no accable to type of any[] معناها حط [(put route here)] 
    })
  }
}
