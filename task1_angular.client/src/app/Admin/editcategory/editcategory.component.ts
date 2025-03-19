import { Component } from '@angular/core';
import { CatService } from '../../cat.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  standalone: false,
  templateUrl: './editcategory.component.html',
  styleUrl: './editcategory.component.css'
})
export class EditcategoryComponent {
  constructor(private _ss: CatService, private _r: ActivatedRoute, private routerr: Router) { }

  ngOnInit() {
    this.catid = this._r.snapshot.paramMap.get("id"); 
    this.getcatidd();
  }
  dataa: any;
  getcatidd() {
    this._ss.getcatbyid(this.catid).subscribe((data) => {
      this.dataa=data
    })
  }
  catid:any
  updatedata(data: any) {
    this.catid = this._r.snapshot.paramMap.get("id")
    this._ss.updatecat(this.catid, data).subscribe(() => {
      alert("updated successfully")
      this.routerr.navigate(['/dashboard/showcat'])
    })
  }
}
