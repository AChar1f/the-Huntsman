<template>
  <div class="container-fluid pt-5 content">
    <div class="row pt-5 pb-4">
      <h2 class="headings">Products</h2>
    </div>
        <div class="row d-flex justify-content-center pb-4">
            <button class="btn sort" type="button" id="sort">Sort by price: lowest</button>

            <form role="search" class="w-25 h-100">
              <input
                class="form-control w-100 h-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
            </form>
        </div>
    <div
      class="row gap-2 justify-content-center products-div"
      v-if="products && products.length"
    >
      <CardComp v-for="product in products" :key="product.prodID">
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
          <!-- <p class="lead">{{ product.prodDescription }}</p> -->
          
        </template>
        <template #card-footer>
          <div
          class="button-wrapper d-md-flex d-block justify-content-center"
          >
          <router-link
          :to="{ name: 'product', params: { id: product.prodID } }"
          >
          <button class="btn btn-success">View Product</button>
        </router-link>
      </div>
      <p class="lead pt-2">Amount: R{{ product.amount }}</p>
    </template>
      </CardComp>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import CardComp from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "ProductsView",
  components: {
    CardComp,
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>

.products-div {
  width: 80% !important;
  margin: 0 auto;
}

img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
}

.sort {
  color: #fff;
  width: 12%;
  border-radius: 5px 2px 5px 2px !important;
}

.form-control:hover {
box-shadow: none !important;
border: 2px solid rgb(29, 29, 29) !important;
border-radius: 5px 2px 5px 2px !important;
}

.form-control:focus {
box-shadow: none !important;
border: 2px solid rgb(29, 29, 29) !important;
border-radius: 5px 2px 5px 2px !important;
}

.form-control {
box-shadow: none !important;
border: 2px solid rgb(129, 129, 129) !important;
border-radius: 5px 2px 5px 2px !important;
}
</style>
