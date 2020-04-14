import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/core/_services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  productForm: FormGroup;
  categorys = [
    {name: 'iPhone', value: 'iphone'},
    {name: 'Samsung', value: 'samsung'},
  ]
  constructor(private _productService: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();
  }

  ngOnDestroy(): void {
    this.subs.forEach(subs => subs.unsubscribe())
  }
  initialForm = () => {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      category: ['iphone'],
      quantity: [''],
      price: ['']
    })
  }

  get f() { return this.productForm.controls }

  onSubmit = () => {
    const form = {
      name: this.f.name.value,
      description: this.f.description.value,
      category: this.f.category.value,
      quantity: this.f.quantity.value,
      price: this.f.price.value
    }

    this.subs.push(
      this._productService.onCreateProduct(form).subscribe(res => {
        alert(res.message)
      }, error => {
        alert(error)
      })
    )
  }
}
