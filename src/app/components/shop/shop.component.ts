import { Component } from '@angular/core';
import { ProdsService } from '../../services/prods.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  myProds:any[]=[]
constructor(private prodSrv:ProdsService){
  this.getData()
}
getData(){
  this.prodSrv.getProducts().subscribe(res => this.myProds=res)
}
deleteitem(item:any){
  this.prodSrv.delProducts(item.id).subscribe(res =>this.getData())
  
}
addProd(desc:any,price:number){
  console.log(desc,price);
  this.prodSrv.addProducts({"desc":desc,"price":price}).subscribe(res => this.getData)
}
updProd(id:any,desc:any,price:any){
  console.log(id,desc,price);
  this.prodSrv.updProducts({desc,price},id).subscribe(res => this.getData())
}
}
