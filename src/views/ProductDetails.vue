<template>
  <div class="container  pt-5 content">
      <div class="row  pt-5">
          <h2 class="headings ">Product Details</h2>
      </div>
      <div class="row justify-content-center" v-if="product">
          <CardComp>
            <template #card-header>
          <img
            :src="product.prodUrl"
            loading="lazy"
            class="img-fluid"
            :alt="product.prodName"
          />
        </template>
        <template #card-body>
          <h5 class="card-title">{{ product.prodName }}</h5>
          <h5 class="card-description">{{ product.prodDescription }}</h5>
        </template>
        <template #card-footer>
          <p class="lead pt-2">R{{ product.amount }}</p>
          <p class="category">{{ product.category }}</p>
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
// import { useRoute } from 'vue-router'

export default {
  components: {
      CardComp,
      Spinner
    },
  computed: {
        product() {
          return this.$store.state.product
        }
      },
  mounted() {
        this.$store.dispatch('fetchProduct')
      }
}

</script>

<style scoped></style>