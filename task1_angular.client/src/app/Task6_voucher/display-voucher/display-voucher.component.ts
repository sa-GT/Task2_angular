import { Component } from '@angular/core';
import { VoucherServiceService } from '../service/voucher-service.service';

@Component({
  selector: 'app-display-voucher',
  standalone: false,
  templateUrl: './display-voucher.component.html',
  styleUrls: ['./display-voucher.component.css'] 
})
export class DisplayVoucherComponent {

  constructor(private _voucherService: VoucherServiceService) { }

  ngOnInit() {
    this.getvoucher();
  }
  data: any;
  getvoucher() {
    this._voucherService.getAllVouchers().subscribe(
      (data) => {
        this.data = data;
      }
    );
  }
}
