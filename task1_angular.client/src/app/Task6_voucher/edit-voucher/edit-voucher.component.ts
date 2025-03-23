import { Component } from '@angular/core';
import { VoucherServiceService } from '../service/voucher-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  standalone: false,
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {
  constructor(private _serv: VoucherServiceService, private activatedd: ActivatedRoute) { }
  id: any
  ngOnInit() {
    this.id = this.activatedd.snapshot.paramMap.get("id")
    this.data_of_vuchers()
  }
  vD: any;
  data_of_vuchers() {
    this._serv.get_v(this.id).subscribe((data) => {
      this.vD=data
    })
  }
  editt(data: any) {
    this._serv.edit_vouchers(data, this.id).subscribe(() => {
      alert("data is done or edited")
    })
  }
}
