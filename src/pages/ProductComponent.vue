<template>
    <div>
      <loader-component v-show="isLoad" />
        <!-- product section  -->
        <div class="container">
          <div class="row">
            <div class="col" v-for="product in products" :key="product.index">
              <div class="card" style="width: 18rem;">
                <img :src="product.image" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{product.title}}</h5>
                  <p class="card-text">{{product.price}}</p>
                  <a href="#" class="btn btn-primary" @click="addToCart(product)">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import LoaderComponent from '@/component/LoaderComponent.vue'
import axios from 'axios'
export default {
    components: {LoaderComponent},
    name: 'ProductComponent',
    data() {
      return {
        isLoad: true,
        products: [],
      }
    },
    created() {
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data
        this.isLoad = false
      })
      .catch(error => {
        console.log(error)
      })
    },
    methods: {
      addToCart(p) {
        var cart = this.$root.cartList
        var isInCart = cart.find(value=> {
          return value.id == p.id
        })
        
        if(isInCart) {
          isInCart.qty++
        }else {
          cart.push({...p, qty: 1})
        }
        console.log(cart)
      }
    }
}
</script>