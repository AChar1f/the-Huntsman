<template>
  <div class="container-fluid content  pt-5">
    <div class="row headings-row pt-5">
      <h2 class="headings heading">Contact Us</h2>

    </div>
        <div class="row d-flex justify-content-center align-items-center banner-row">
            <img class="banner" src="https://github.com/caleb-okkers/the-forge-images/blob/main/pexels-ahmetmert-22840949(1)(1)(1)(1)(1)(1).png?raw=true" alt="">
        </div>
        <section class="contact-section d-flex justify-content-center align-items-center">

          <div class="form-div pb-5 justify-content-center align-items-center">
          <form @submit.prevent="submitForm" class="mt-5">
            <div class="contact-label-div mb-3">
              <label for="name" class="form-label contact-label">Full Name</label>
              <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your full name" name="name" required>
              <span v-if="formErrors.name" class="error">{{ formErrors.name }}</span>
            </div>
            <div class="contact-label-div mb-3">
              <label for="email" class="form-label contact-label">Email address</label>
              <input v-model="formData.email" type="email" class="form-control contact-form" id="email" placeholder="name@example.com" name="email" required>
              <span v-if="formErrors.email" class="error">{{ formErrors.email }}</span>
            </div>
            <div class="contact-label-div mb-3">
              <label for="message" class="form-label contact-label">Message</label>
              <textarea v-model="formData.message" class="form-control" id="message" rows="5" placeholder="Enter your message" name="message" required></textarea>
              <span v-if="formErrors.message" class="error">{{ formErrors.message }}</span>
            </div>
            <button type="submit" class="btn custom-submit-button btn-outline-success"><span>Submit</span></button>
          </form>
        </div>

        <div class="socials justify-content-center align-items-center">
          <div class="info d-flex justify-content-center align-items-center">
            <div>
              <p>Address: </p>
              <p>Email: </p>
              <p>Phone: </p>
  
            </div>
            <div>
              <p>Macassar Rd, Croydon, Cape Town, 7134</p>
              <p>info@thehuntsman.com</p>
              <p>021 707 7777</p>
            </div>

          </div>

          <div class="icons">
            <a href="https://www.instagram.com/argo.digitalmarketing/"  target="_blank">

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
              </svg>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61562437798479"  target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
</svg>
            </a>

            <a href="https://www.youtube.com/@rockstaraxethrowingorlando4429"  target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
</svg>
            </a>


          </div>
        </div>
        </section>
    </div>
  </template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "ContactSection",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      formErrors: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.formErrors.name = '';
      this.formErrors.email = '';
      this.formErrors.message = '';

      // Validate name
      if (!this.formData.name.trim()) {
        this.formErrors.name = 'Name is required';
      }

      // Validate email
      if (!this.formData.email.trim()) {
        this.formErrors.email = 'Email is required';
      } else if (!this.isValidEmail(this.formData.email)) {
        this.formErrors.email = 'Invalid email format';
      }

      // Validate message
      if (!this.formData.message.trim()) {
        this.formErrors.message = 'Message is required';
      }

      if (!this.formErrors.name && !this.formErrors.email && !this.formErrors.message) {
        this.submitToFormspree();
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    submitToFormspree() {
      const formUrl = 'https://formspree.io/f/xrbzoqqd';
      fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        this.clearForm();
        toast.success('Form submitted successfully!', {
          position: 'bottom-center',
          autoClose: 3000,
        });
      })
      .catch(error => {
        console.error('There was a problem with form submission:', error);
        toast.error('There was an error submitting the form. Please try again later.', {
          position: 'bottom-center',
          autoClose: 5000,
        });
      });
    },
    clearForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>

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
  z-index: -1; /* Banner stays behind the text */
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire banner area */
}

.contact-section {
  position: relative;
  z-index: 2; /* Ensure text is above the banner */
  margin-top: 14rem; /* Adjust to start overlapping the banner */
  padding: 1rem !important;
  background-color: #fff; /* Optional: Adds a semi-transparent background to the text */
  width: 100vw;
}

.form-div {
  width: 600px;
  height: 450px;
  margin: 0 auto !important;
  margin-top: -40px;
  
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

.custom-submit-button {
  color: #fff;
}

.contact-label {
  font-family: "Bona Nova SC", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.2rem;
  color: rgb(29, 29, 29);
}

.socials {
  margin: 0 auto !important;
}

.socials p {
  text-align: left;
}

.info div {
  padding: 2rem;
}

.icons a {
  padding: 1rem;
}

@media (max-width: 475px) {
  .form-div {
    width: 100% !important;
    margin: 0 12px;
    padding-left: 0px;
  }

  .socials {
    padding-bottom: 1rem;
  }
}
</style>
