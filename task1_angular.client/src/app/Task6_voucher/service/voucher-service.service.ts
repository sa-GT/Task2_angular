import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoucherServiceService {

  constructor(private _Http: HttpClient) { }

  getAllVouchers() {
    return this._Http.get<any>('https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher');
  }
  post_user(data: any) {
    return this._Http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher",data)
  }
  edit_vouchers(data : any,id : any) {
    return this._Http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`,data)
  }
  get_v(id:any) {
    return this._Http.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)
  }
}
