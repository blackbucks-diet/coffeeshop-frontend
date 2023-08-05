import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  id:string="";
  coffee_shop:any;
  image:any;
  constructor(private http:HttpClient,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    let res =this.http.get("http://localhost:4568/coffee_shop/find?id="+this.id);
    res.subscribe(                                                                                                                                              
      data=>{
        this.coffee_shop=data;
        console.log(this.coffee_shop);
        this.image=this.coffee_shop.image;

      }
    );

  }


  

}