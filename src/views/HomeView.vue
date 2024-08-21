<template>
  <div class="container-fluid pt-5">
    <div class="row pt-5">
      <h2 class="title">The Huntsman</h2>
    </div>
    <div class="row">
      <h5 class="headings">New Releases</h5>
    </div>
    <div class="row gap-2 justify-content-center products-div" v-if="latestProducts">
      <CardComp v-for="product in latestProducts" :key="product.prodID">
        <template #card-header>
          {{ product.productURL }}
          <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
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
    latestProducts() {
      return this.$store.state.latestProducts
    }
  },
  mounted() {
    this.$store.dispatch('latestProducts')
  }
}
</script>

<style scoped>

.title {
  font-family: "Bona Nova SC", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 5rem;
}

.products-div {
    width: 80% !important;
    margin: 0 auto;
  }

  .amount-view {
    bottom: 0 !important;
  }

.card-title {
  font-weight: 600;
}
</style>