import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  flavour:string="";
  quantity:string="";
  caffinecontent:string="";
  price:string="";
  discount:string="";
 


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("flavour",this.flavour);
    uploadImageData.append("quantity",this.quantity);
    uploadImageData.append("caffinecontent",this.caffinecontent);
    uploadImageData.append("price",this.price);
    uploadImageData.append("discount",this.discount);
    
    

    let res =this.http.post("http://localhost:4568/coffee_shop/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.flavour="";
        this.quantity="";
        this.caffinecontent="";
        this.price="";
        this.discount="";
        
      }
    );

  }

}