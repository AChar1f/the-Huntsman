<template>
  <div class="container-fluid">
    <div class="row">
      <h2 class="display-2">The Huntsman</h2>
    </div>
    <div class="row">
      <h5 class="display-5">Recent Products</h5>
    </div>
    <div class="row gap-2 justify-content-center" v-if="recentProducts">
      <CardComp v-for="product in recentProducts" :key="product.prodID">
        <template #card-header>
          {{ product.productURL }}
          <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #card-body>
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="lead">{{ product.prodDescription }}</p>
          <p class="lead">Amount: R{{ product.amount }}</p>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <Spinner/> 
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'HomeView',
  components: {
    CardComp,
    Spinner
  },
  computed: {
    recentProducts() {
      return this.$store.state.recentProducts
    }
  },
  mounted() {
    this.$store.dispatch('recentProducts')
  }
}
</script>
