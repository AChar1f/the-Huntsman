<template>
  <div class="container-fluid pt-5 content">
    <div class="row headings-row pt-4">
      <h2 class="title heading"><span>The </span> <span> Huntsman</span></h2>
    </div>
    <div class="row home-img-row">
      <img class="home-img" src="https://github.com/caleb-okkers/the-forge-images/blob/main/pexels-ahmetmert-20576396(1)(1)(1)(1).png?raw=true" alt="Warrior" loading="lazy">
    </div>

    <section class="new-products-section">

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
    <Spinner/> 
  </div>
</section>
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
  color: rgb(29, 29, 29);
  /* color: #000; */
}

.products-div {
    width: 80% !important;
    margin: 0 auto;
  }

.card-title {
  font-weight: 600;
}

.home-img-row {
  width: 100vw;
}

.home-img {
  margin-top: -1rem;
  margin-bottom: 1rem;
  padding: 0 0;
  object-fit: stretch !important;
  object-position: center;
  
}

/* Keyframes for "The" */
@keyframes moveInFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Keyframes for "Huntsman" */
@keyframes moveInFromRight {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}


.title span:first-child {
    display: inline-block;
    animation: moveInFromLeft 1s ease-in-out forwards;
    color: #777;
}

.title span:last-child {
    display: inline-block;
    animation: moveInFromRight 1s ease-in-out forwards;
}

.products-div img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
}

.btn {
  /* background: rgb(0, 43, 29) !important; */
  border-radius: none !important;
}

.heading {
  padding-bottom: 20px;
  position: fixed;
  top: 5rem; 

  z-index: 1; 
  overflow: hidden;
}

.home-img-row {
  position: fixed;
  top: 170px; 
  z-index: -1; 
  overflow: hidden;
}

.home-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text {
  position: relative;
  z-index: 2; 
  margin-top: 200px; 
  padding: 20px;
  background-color: #fff; 
  width: 100vw;
}

.new-products-section {
  position: relative;
  z-index: 2; 
  margin-top: 40rem; 
  padding: 20px;
  background-color: #fff; 
  width: 100vw;
}


@media (max-width: 992px) {
  .title {
    font-size: 4rem;
  }

  .home-img-row {
    top: 10rem;
  }

  .new-products-section {
    margin-top: 20rem;
  }

  .products-div {
    width: 90% !important;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 3rem;
    text-align: center;
  }

  .home-img-row {
    top: 10rem;
  }

  .new-products-section {
    margin-top: 20rem;
  }

  .products-div {
    width: 95% !important;
  }

  .btn {
    width: 100%;
  }

  .headings-row {
    text-align: center;
  }
}


@media (max-width: 575px) {
  .title {
    font-size: 2.5rem;
    text-align: center;
  }

  .home-img-row {
    top: 8rem
  }

  .new-products-section {
    margin-top: 15rem;
  }

  .products-div {
    width: 100% !important;
  }

  .btn {
    width: 100%;
  }

  .headings-row {
    text-align: center;
  }
}


@media (max-width: 330px) {
  .title {
    font-size: 2.2rem;
    text-align: center;
  }

  .home-img-row {
    top: 8rem
  }

  .new-products-section {
    margin-top: 10rem;
  }

  .products-div {
    width: 100% !important;
  }



  .headings-row {
    text-align: center;
  }

  .headings {
    font-size: 1.8rem;
  }

  .card-title {
    font-size: 1rem;
  }

  .btn {
    margin-top: 0.5rem;
    width: 6.5rem !important;
    height: 2.3rem !important;
    font-size: 0.8rem !important;
    text-align: center !important;
    border: 0.2px solid rgb(29, 29, 29) !important;
  }
}


</style>