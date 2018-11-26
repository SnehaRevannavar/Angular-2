import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  pageTitle : string ='Products-list';
  products : any = []
  productSubscription :any;

  showHideImage : boolean = true;
  constructor(private _productService : ProductsService) { }

  ngOnInit() {

    this.productSubscription = this._productService.getProducts().subscribe((resp)=>{
      this.products=resp;
      console.log(this.products);
      
    });
  }

  toggleImage() : void {
    this.showHideImage = !this.showHideImage;
  }

  
  ratingParentFn(ratingVal:string){
    console.log(ratingVal);
  }

  ngOnDestroy(){
    this.productSubscription.unsubscribe();
  }
}
