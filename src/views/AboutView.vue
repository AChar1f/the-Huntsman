<template>
  <div class="container-fluid content pt-5">
    <div class="row headings-row pt-5">
      <h2 class="headings heading">About Us</h2>
    </div>
    <div class="row justify-content-center banner-row">
      <img
        class="banner"
        src="https://github.com/caleb-okkers/the-forge-images/blob/main/pexels-ahmetmert-19955805(1)(1).png?raw=true"
        alt=""
      />
    </div>
    <div class="text">
      <p>
        The Huntsman was established in 2007 with a mission to bring the most
        formidable and rugged tools to those who seek to conquer the wild. Our
        journey began with a vision to offer a curated selection of knives,
        axes, tomahawks, and karambits that embody the fierce and untamed spirit
        of the Berserker.
      </p>

      <p>
        Driven by a passion for the outdoors and a deep respect for traditional
        craftsmanship, we set out to provide the highest quality weapons and
        tools for hunting and combat training. While we don't craft these tools
        ourselves, we meticulously source each item from skilled manufacturers
        who share our commitment to rugged durability and exceptional
        performance.
      </p>

      <p>
        From the beginning, The Huntsman has been about more than just selling
        tools; it’s about offering a gateway to a world where strength and
        resilience are paramount. Our products are selected for their ability to
        stand up to the toughest challenges and for their ability to evoke the
        raw, primal energy that defines the Berserker spirit.
      </p>

      <p>
        We have grown from our humble beginnings into a trusted name among
        hunters, combat trainers, and enthusiasts, always remaining true to our
        core values of quality and authenticity. At The Huntsman, we proudly
        provide the tools that enable you to face the elements with confidence
        and power.
      </p>
    </div>
  </div>
</template>

<style scoped>

.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
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

  width: 100%;
  height: 300px; 
  z-index: 1; 
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.text {
  position: relative;
  z-index: 2; 
  margin-top: 300px; 
  padding: 20px;
  background-color: #fff;
  width: 100vw;
  padding: 3rem 10rem;
}

@media (max-width: 992px) {
  .text {
    padding: 2rem 8rem !important;
  }
}


@media (max-width: 768px) {
  .text {
    padding: 2rem 6rem !important;
  }
}


@media (max-width: 575px) {
  .text {
    padding: 2rem 5rem !important;
  }
}

@media (max-width: 330px) {
  .text {
    padding: 2rem 3rem !important;
  }
}

</style>
