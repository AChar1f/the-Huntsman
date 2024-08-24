<template>
  <div class="container-fluid pt-5 content">
    <div class="row headings-row pt-5 pb-2">
      <h2 class="headings heading">Products</h2>
    </div>

    <div class="row banner-row">
            <img class="banner" src="https://github.com/caleb-okkers/the-forge-images/blob/main/shoutpexels-ahmetmert-20456671(1)(1).png?raw=true" alt="">
    </div>

    <section class="products-section">

      
      <div class="row filter-div mx-auto d-flex justify-content-center pt-4 pb-4">
        <form role="search" class="w-25 h-100 search-form">
          <input
          class="form-control search w-100 h-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchQuery"
          />
        </form>
        <button
        class="btn sort"
        type="button"
        id="sort"
        @click="toggleSort"
        >
        Price: {{ sortAscending ? 'lowest' : 'highest' }}
      </button>
      

      <select
            class="form-control w-50 ms-2"
            v-model="selectedCategory"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
      </select>
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
      selectedCategory: '',
      categories: [], // To store unique categories
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

    if (this.selectedCategory && this.selectedCategory !== '') {
        filteredProducts = filteredProducts.filter(product =>
          product.category === this.selectedCategory
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
    this.$store.dispatch("fetchProducts").then(() => {
      // Extract unique categories from products
      const products = this.$store.state.products || [];
      this.categories = [...new Set(products.map(product => product.category))];
    });
  },
};
</script>

<style scoped>

.filter-div {
  width: 80%;
}

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
border: 2px solid rgb(29, 29, 29) !important;
border-radius: 5px 2px 5px 2px !important;
}

.category {
  font-size: 0.9rem;
}

.heading {
  padding-bottom: 20px;
  position: fixed;
  top: 6rem;

  z-index: 1; 
  overflow: hidden;
}

.banner-row {
  position: fixed;
  top: 150px; 

  z-index: 1; 
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

.category {
  font-size: 0.9rem;
  color: #777;
}

select.form-control {
  max-width: 150px; /* Adjust as needed */
}

.search-form {
  height: 2.5rem !important;
  width: 40% !important;
}

.search {
  height: 100% !important;
}

@media (max-width: 1350px) {

  select.form-control {
  width: 8rem !important; /* Adjust as needed */
  height: 2.6rem !important;
  font-size: 1rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 95% !important;
  height: 2.6rem !important;
  font-size: 1rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 1rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}

.sort {
  margin-top: 0.5rem;
  width: 8rem !important;
  height: 2.6rem !important;
  font-size: 1rem !important;
  text-align: center !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}


}

@media (max-width: 992px) {

  select.form-control {
  width: 6.5rem !important; /* Adjust as needed */
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 100% !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.8rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}

.sort {
  margin-top: 0.5rem;
  width: 6.5rem !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  text-align: center !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}


}


@media (max-width: 768px) {

  select.form-control {
  width: 6.5rem !important; /* Adjust as needed */
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 100% !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.8rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}

.sort {
  margin-top: 0.5rem;
  width: 6.5rem !important;
  height: 2.6rem !important;
  font-size: 0.8rem !important;
  text-align: center !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}

}


@media (max-width: 575px) {

  select.form-control {
  width: 6.5rem !important; /* Adjust as needed */
  height: 2.3rem !important;
  font-size: 0.8rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 23rem !important;
  height: 2.3rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.8rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}

.sort {
  margin-top: 0.5rem;
  width: 6.5rem !important;
  height: 2.3rem !important;
  font-size: 0.8rem !important;
  text-align: center !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}

}

@media (max-width: 330px) {

  select.form-control {
  width: 5.5rem !important; /* Adjust as needed */
  height: 1.8rem !important;
  font-size: 0.6rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
  margin-top: 0.5rem;
}

.search-form {
  width: 13rem !important;
  height: 1.8rem !important;
  font-size: 0.8rem !important;
  
}

.search {
  width: 100% !important;
  height: 100% !important;
  font-size: 0.65rem !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}

.sort {
  margin-top: 0.5rem;
  width: 5.5rem !important;
  height: 1.8rem !important;
  font-size: 0.65rem !important;
  text-align: center !important;
  border: 0.2px solid rgb(29, 29, 29) !important;
}


}

</style>
