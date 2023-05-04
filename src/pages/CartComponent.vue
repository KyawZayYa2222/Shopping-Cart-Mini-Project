<template>
    <div>
      <h1 align="center">Shopping Cart</h1>
      <!-- cart list table  -->
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cartItem, index) in cartList" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{cartItem.title}}</td>
              <td>{{cartItem.price}} $</td>
              <td>
                <div class="border border-dark rounded" style="width:fit-content;">
                    <span class="btn btn-sm btn-secondary" @click="qtyDec(cartItem)">-</span>
                    <span class="px-2">{{cartItem.qty}}</span>
                    <span class="btn btn-sm btn-secondary" @click="qtyInc(cartItem)">+</span>
                </div>
              </td>
              <td><button class="btn btn-sm btn-danger" @click="removeItem(index)">remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
    name: 'CartComponent',
    data() {
        return {
            cartList: this.$root.cartList,
            noItem: false
        }
    },
    methods: {
        qtyInc(item) {
            item.qty++
        },
        qtyDec(item) {
            if(item.qty > 1) {
                item.qty--
            }
        },
        removeItem(index) {
            this.cartList.splice(index, 1)
        }
    },

}
</script>