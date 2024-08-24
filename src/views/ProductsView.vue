<template>
  <div class="container-fluid pt-5 content">
    <div class="row headings-row pt-5 pb-2">
      <h2 class="headings heading">Products</h2>
    </div>

    <div class="row banner-row">
            <img class="banner" src="https://github.com/caleb-okkers/the-forge-images/blob/main/shoutpexels-ahmetmert-20456671(1)(1).png?raw=true" alt="">
    </div>

    <section class="products-section">

      
      <div class="row d-flex justify-content-center pt-4 pb-4">
        <button
        class="btn sort"
        type="button"
        id="sort"
        @click="toggleSort"
        >
        Sort by price: {{ sortAscending ? 'lowest' : 'highest' }}
      </button>
      
      <form role="search" class="w-25 h-100">
        <input
        class="form-control w-100 h-100"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchQuery"
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
      <p class="lead pt-2">R{{ product.amount }}</p>
      <p class="category">{{ product.category }}</p>
    </template>
  </CardComp>
</div>
<div v-else>
  <Spinner />
</div>
</section>
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
  data() {
    return {
      searchQuery: '',
      sortAscending: true,
    };
  },
  computed: {
  products() {
    let filteredProducts = this.$store.state.products || [];

    if (!filteredProducts.length) {
      return [];
    }

    if (this.searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) || product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    if (this.sortAscending) {
      filteredProducts.sort((a, b) => a.amount - b.amount);
    } else {
      filteredProducts.sort((a, b) => b.amount - a.amount);
    }

    return filteredProducts;
  },
},
  methods: {
    toggleSort() {
      this.sortAscending = !this.sortAscending;
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

.products-div img {
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

.category {
  font-size: 0.9rem;
  color: #777;
}

.heading {
  padding-bottom: 20px;
  position: fixed;
  top: 6rem; /* Adjust to place the banner below the heading */

  z-index: 1; /* Banner stays behind the text */
  overflow: hidden;
}

.banner-row {
  position: fixed;
  top: 150px; /* Adjust to place the banner below the heading */

  z-index: 1; /* Banner stays behind the text */
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire banner area */
}

.products-section {
  position: relative;
  z-index: 2; /* Ensure text is above the banner */
  margin-top: 20rem; /* Adjust to start overlapping the banner */
  padding: 20px;
  background-color: #fff; /* Optional: Adds a semi-transparent background to the text */
  width: 100vw;
}
</style>
