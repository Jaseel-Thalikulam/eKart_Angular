import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // value:string|null=""
  addToCart: number = 0;
  message:string = "";
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png',

  }

  getDiscountedPrice() {

    return this.product.price - (this.product.price * this.product.discount / 100)

  } 

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--
    }
  }

  incrementCartValue() {
    if (!(this.addToCart >= this.product.inStock)) {
      this.addToCart++
    }
  }

  buyNow(){
    if (this.addToCart <= 0) {
      this.message = "Kindly specify quantity greater than zero"
      return
    }
    this.message=""
    this.product.inStock = (this.product.inStock-this.addToCart)
  }

  // onValueChange(event:any) {

  //   this.value=event.target.value

  // }


}
