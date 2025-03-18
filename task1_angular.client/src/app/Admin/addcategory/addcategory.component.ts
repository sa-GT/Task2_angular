import { Component } from '@angular/core';
import { CatService } from '../../cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  standalone: false,
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  constructor(private _serv: CatService, private _route: Router) {
  }
  ngOnInit() {

  }

  addnewcat(data: any) {
    this._serv.postcategory(data).subscribe(() => {
      alert("you Added data successfully");
      this._route.navigate(['/dashboard/showcat'])
    })
  }
}
