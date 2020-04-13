import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/core/_services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  products: any;
  constructor(private _productService: ProductService) { }


  ngOnInit(): void {
    this.onFetchProduct();
  }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }
  
  onFetchProduct = () => {
    this.subs.push(
      this._productService.onFetchProduct().subscribe(res => {
        this.products = res;
      })
    )
  }
}
