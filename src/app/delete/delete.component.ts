

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  allCoffeeShops:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:4568/coffee_shop/all");
    res.subscribe(
      data=>this.allCoffeeShops=data
    );

  }

  delteUser(id:string){
console.log(id);
let res = this.http.get("http://localhost:4568/coffee_shop/delete?id="+id);
    res.subscribe(
      data=>this.allCoffeeShops=data
    );
  }

}