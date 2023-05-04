<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 mb-2">
          <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Shopper</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/product" class="nav-link">Products</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/cart" class="nav-link">
                    <span class="me-1">cart</span>
                    <i class="bi bi-cart position-relative">
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-secondary">
                        {{cart.length}}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    </i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
      return {
        cart: []
      }
    },
    created() {
      this.cart = this.$root.cartList
    }
}
</script>