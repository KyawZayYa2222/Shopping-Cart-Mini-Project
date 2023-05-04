<template>
    <div>
        <!-- nav bar  -->
        <nav-bar/>

        <slot></slot>

        <!-- footer  -->
        <p class="text-center fixed-bottom border-0 border-top py-3 mb-0 bg-light">Shopping Cart developed by Kyawzayya.</p>
    </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  components: { NavBar },
    name: 'MasterComponent',
}
</script>