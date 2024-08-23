<template>
  <div class="container-fluid  pt-5">
        <div class="row  pt-5">
            <h2 class="headings heading ">Register</h2>
        </div>
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
  height: 450px;
}

.register-form input {
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  width: 100%;
  box-shadow: none !important;
border: 2px solid rgb(129, 129, 129) !important;
border-radius: 5px 2px 5px 2px !important;
}

button {
  color: #fff;
}

button:hover {
  color: #fff;
  background: #000;
}
  </style>