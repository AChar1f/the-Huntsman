<template>
    <div class="container-fluid">
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row gap-2 justify-content-center" v-if="products && products.length">
        <!-- Loop through the products and display each one -->
        <CardComp v-for="product in products" :key="product.prodID">
          <template #card-header>
            <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
          </template>
          <template #card-body>
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="lead">{{ product.prodDescription }}</p>
            <p class="lead">Amount: R{{ product.amount }}</p>
          </template>
        </CardComp>
      </div>
      <!-- Display a spinner if products are not yet loaded -->
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script>
  import CardComp from '@/components/Card.vue'
  import Spinner from '@/components/Spinner.vue'
  
  export default {
    name: 'ProductsView',
    components: {
      CardComp,
      Spinner
    },
    computed: {
      // Access products from the Vuex store
      products() {
        return this.$store.state.products
      }
    },
    mounted() {
      // Fetch products when the component is mounted
      this.$store.dispatch('fetchProducts')
    }
  }
  </script>