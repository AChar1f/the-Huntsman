<template>
    <div class="container-fluid  pt-5">
      <div class="row  pt-5">
        <h2 class="headings ">Products</h2>
      </div>
      <div class="row gap-2 justify-content-center products-div" v-if="products && products.length">
        <CardComp v-for="product in products" :key="product.prodID">
          <template #card-header>
            <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
          </template>
          <template #card-body>
            <h5 class="card-title">{{ product.prodName }}</h5>
            <!-- <p class="lead">{{ product.prodDescription }}</p> -->
            <div class="amount-view"><p class="lead">Amount: R{{ product.amount }}</p>
              <div class="button-wrapper d-md-flex d-block justify-content-center">
                <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                  <button class="btn btn-success">View Product</button>
                </router-link>
              </div>
            </div>
          </template>
        </CardComp>
      </div>
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
      products() {
        return this.$store.state.products
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts')
    }
  }
  </script>

  <style scoped>
  
  .amount-view {
    bottom: 0 !important;
  }

  .products-div {
    width: 80% !important;
    margin: 0 auto;
  }
  </style>