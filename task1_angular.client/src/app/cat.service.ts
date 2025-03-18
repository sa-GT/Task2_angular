import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private _ser: HttpClient) { }

  getCat() {
    return this._ser.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  getproductbyid() {
    return this._ser.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products")
  }

  getproductdetailed() {
    return this._ser.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
  postproduct(data: any) {
    return this._ser.post<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/products', data)
  }

  postcategory(data: any) {
    return this._ser.post<any>('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories', data)
  }
}
