<template>
  <div class="container-fluid  pt-5">
        <div class="row  pt-5">
            <h2 class="headings heading ">Register</h2>
        </div>

        <div class="row d-flex justify-content-center align-items-center banner-row">
            <img class="banner" src="https://github.com/caleb-okkers/the-forge-images/blob/main/pexels-ahmetmert-22840949(1)(1)(1)(1)(1)(1).png?raw=true" alt="">
        </div>

        <section class="register-section">
          <div class="row justify-content-center">
            <div class="register-form">
            <h3>Become A Huntsman</h3>
            <input v-model="newUser.userProfile" type="text" placeholder="Profile URL">
            <input v-model="newUser.firstName" type="text" placeholder="First Name">
            <input v-model="newUser.lastName" type="text" placeholder="Last Name">
            <input v-model="newUser.userAge" type="text" placeholder="Age">
            <input v-model="newUser.emailAdd" type="email" placeholder="Email">
            <input v-model="newUser.userPass" type="password" placeholder="Password">
            <button class="btn mt-1 mb-1" @click="addUser">Submit</button>
          </div>
          </div>

        </section>
    </div>
  </template>
  

  <script>
  import { mapState} from 'vuex'
  
  export default {
    name: 'AdminTable',
    data() {
      return {
        newUser: {
        userProfile: '',
        firstName: '',
        lastName: '',
        userAge: '',
        gender: '',
        emailAdd: '',
        userPass: ''
      }
    };
  },
    computed: {
      ...mapState('users')
    },
    methods: {
      addUser() {
        if (this.newUser.userProfile && this.newUser.firstName && this.newUser.lastName && this.newUser.userAge && this.newUser.emailAdd && this.newUser.userPass) {
          this.$store.dispatch('register', this.newUser).then(() => {
            this.showAddUserForm = false;
            this.newUser = { userProfile: '', firstName: '', lastName: '', userAge: '', emailAdd: '', userPass: '' };
          });
        } else {
          alert('Please fill in all fields.');
        }
      }
    }
  }
  
  </script>

  <style scoped>
  
  /* .register-form {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
} */

.register-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 500px;
}

.register-form input {
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  width: 100%;
  box-shadow: none !important;
border: 2px solid rgb(129, 129, 129) !important;
border-radius: 5px 2px 5px 2px !important;
height: 2.5rem;
}

button {
  color: #fff;
}

button:hover {
  color: #fff;
  background: #000;
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
  z-index: -1; /* Banner stays behind the text */
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire banner area */
}

.register-section {
  position: relative;
  z-index: 2; /* Ensure text is above the banner */
  margin-top: 14rem; /* Adjust to start overlapping the banner */
  padding: 1rem !important;
  background-color: #fff; /* Optional: Adds a semi-transparent background to the text */
  width: 100vw;
}
  </style>