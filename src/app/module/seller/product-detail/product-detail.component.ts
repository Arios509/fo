import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  details: any;
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onFetchDetail();
  }

  onFetchDetail = () => {
    const id = this.route.snapshot.paramMap.get('id');
    this._productService.onFetchProductDetail(id).subscribe(res => {
      this.details = res;
    })
  }

}
