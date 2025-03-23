import { Component } from '@angular/core';
import { VoucherServiceService } from '../service/voucher-service.service';

@Component({
  selector: 'app-create-viucher',
  standalone: false,
  templateUrl: './create-viucher.component.html',
  styleUrl: './create-viucher.component.css'
})
export class CreateViucherComponent {
  constructor(private _serv: VoucherServiceService) { }

  ngOnInit() {

  }

  addVoucher(data : any) {
    this._serv.post_user(data).subscribe(() => {
      alert('data is added');
    })
  }
}
