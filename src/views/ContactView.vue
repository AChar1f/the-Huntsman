<template>
  <div class="container-fluid content  pt-5">
    <div class="row pt-5">
      <h2 class="headings heading">Contact Us</h2>

    </div>
        <div class="row d-flex justify-content-center align-items-center banner-row">
            <img class="banner" src="https://github.com/caleb-okkers/the-forge-images/blob/main/pexels-ahmetmert-22840949(1)(1)(1)(1)(1)(1).png?raw=true" alt="">
        </div>
        <section class="contact-section d-flex justify-content-center align-items-center">

          <div class="form-div pb-5 justify-content-center align-items-center">
          <form @submit.prevent="submitForm" class="mt-5">
            <div class="contact-label-div mb-3">
              <label for="name" class="form-label contact-label">Name</label>
              <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your name" name="name" required>
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
          <p>Address: <span>Macassar Rd, Croydon, Cape Town, 7134</span></p>
          <p>Email: <span>info@thehuntsman.com</span></p>
          <p>Phone: <span>021 707 7777</span></p>
        </div>
        </section>
    </div>
  </template>

<script>
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
      // Reset errors
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

      // Submit form if no errors
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
        alert('Form submitted successfully!');
        this.clearForm();
      })
      .catch(error => {
        console.error('There was a problem with form submission:', error);
        alert('There was an error submitting the form. Please try again later.');
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

span {
  text-align: center;
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
