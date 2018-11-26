import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //para is a variable to get the index value of the selected product
  para: number;
  productArray: any = [];
  //data is the variable to store the details of the selected product
  data: any;
  productDetrails: any;
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService) {}

  ngOnInit() {
    this.para =  this._activatedRoute.snapshot.params['id'];
    this._productService.getProducts().subscribe(products => {
          this.productArray =products;
          //this filter operation will not work outside of the subscription as it is an asynchronous operation( it may work sometimes but not always)
          this.data = this.productArray.filter(value =>{ 
            return value.productId == this.para 
            }
          );
          console.log(this.data[0]);
          //this is an array having only one object
          //the reason why it returns an array is that there can be multiple objects with the same productId
          //there is no rule saying the productId must be unique
          //so we are using the index 0 to fetch the first object in the array
           this.productDetrails = this.data[0];
    });
    
  }

}
