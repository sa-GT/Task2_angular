import { Component } from '@angular/core';
import { CatService } from '../cat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productd',
  standalone: false,
  templateUrl: './productd.component.html',
  styleUrl: './productd.component.css'
})
export class ProductdComponent {
  constructor(private _ser: CatService, private productss: ActivatedRoute) { }

  ngOnInit() {
    this.getpdetailed();
  }
  detailed: any;
  pid: any;
  getpdetailed() {
    this.pid = this.productss.snapshot.paramMap.get("id");
    this._ser.getproductdetailed().subscribe((data) => {
      this.detailed = data.filter((x: any) => x.id == this.pid);
    })
  }
}
