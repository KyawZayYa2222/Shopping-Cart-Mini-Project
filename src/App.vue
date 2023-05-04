<template>
  <div>
    <master-component>
      <router-view></router-view>
    </master-component>
    
  </div>
</template>

<script>
import MasterComponent from './layout/MasterComponent.vue'
export default {
  components: { MasterComponent },
  name: 'App',
}
</script>