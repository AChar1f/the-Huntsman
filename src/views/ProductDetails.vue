<template>
  <div class="container  pt-5">
      <div class="row  pt-5">
          <h2 class="headings ">Product Details</h2>
      </div>
      <div class="row justify-content-center" v-if="product">
          <CardComp>
              <template #cardHeader>
                  {{ product.productUrl }}
                  <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
              </template>
              <template #cardBody>
                  <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                  <p class="lead">
                      {{ product.prodDescription }}
                  </p>
                  <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
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