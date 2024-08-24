<template>
  <div class="container pt-5 content">
    <div class="row pt-5">
      <h2 class="headings heading">Product Details</h2>
    </div>
    <div class="row justify-content-center" v-if="product">
      <CardComp>
        <template #card-header>
          <img
            :src="product.prodURL"
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
      <Spinner />
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  components: {
    CardComp,
    Spinner
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    productId() {
      return this.$route.params.id; // Get the product ID from the route params
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.productId); // Dispatch the action with the product ID
  }
};
</script>

<style scoped>
@media (max-width: 992px) {

}


@media (max-width: 768px) {

}


@media (max-width: 575px) {

}

@media (max-width: 330px) {

}


</style>