
<template>
  <div class="container content  pt-5">
    <div class="row  pt-5">
            <h2 class="headings ">Admin Portal</h2>
    </div>

    <div class="row  pt-4">
            <h2 class="headings ">Users</h2>
    </div>
    <button @click="showAddUserForm = true" class="add-user-button btn mt-1 mb-1">Add User</button>
    
    <!-- Add User Form -->
    <div v-if="showAddUserForm" class="add-user-form">
      <h3>Add New User</h3>
      <input v-model="newUser.userProfile" type="text" placeholder="Profile URL">
      <input v-model="newUser.firstName" type="text" placeholder="First Name">
      <input v-model="newUser.lastName" type="text" placeholder="Last Name">
      <input v-model="newUser.userAge" type="text" placeholder="Age">
      <input v-model="newUser.emailAdd" type="email" placeholder="Email">
      <input v-model="newUser.userPass" type="password" placeholder="Password">
      <button class="btn mt-1 mb-1" @click="addUser">Submit</button>
      <button class="btn mt-1 mb-1" @click="showAddUserForm = false">Cancel</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Profile</th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.ID">
          <td> <img :src="user.userProfile " alt="profile"></td>
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userRole }}</td>
          <td>
            <button class="btn mt-1 mb-1" @click="updateUser(user)">Update</button>
            <button class="btn mt-1 mb-1" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

        <!-- Update User Modal -->
        <div v-if="showUpdateModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Update User</h3>
        <input v-model="currentUser.userProfile" type="text" placeholder="Profile URL">
        <input v-model="currentUser.firstName" type="text" placeholder="First Name">
        <input v-model="currentUser.lastName" type="text" placeholder="Last Name">
        <input v-model="currentUser.userAge" type="text" placeholder="Age">
        <input v-model="currentUser.emailAdd" type="email" placeholder="Email">
        <button class="btn mt-1 mb-1" @click="updateUser">Save changes</button>
        <button class="btn mt-1 mb-1" @click="closeUpdateModal">Cancel</button>
      </div>
    </div>


    

    <div class="row pt-4">
            <h2 class="headings ">Products</h2>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>ID</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td> <img :src="product.prodUrl" alt="product"></td>
          <td>{{ product.prodID }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.prodDescription }}</td>
          <td>{{ product.category }}</td>
          <td>R {{ product.amount }}</td>
          <td>
            <button class="btn mt-1 mb-1" @click="updateProduct(product)">Update</button>
            <button class="btn mt-1 mb-1" @click="deleteProduct(product.prodID)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AdminTable',
  data() {
    return {
      showAddUserForm: false,
      newUser: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  computed: {
    ...mapState(['users', 'products'])
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchProducts', 'updateUser', 'deleteUser', 'updateProduct', 'deleteProduct']),
    openUpdateModal(user) {
      this.currentUser = { ...user };
      this.showUpdateModal = true;
    },
    closeUpdateModal() {
      this.showUpdateModal = false;
    },
    updateUser() {
      this.$store.dispatch('updateUser', this.currentUser).then(() => {
        this.showUpdateModal = false;
      });
    },
    deleteUser(userID) {
      if (confirm('Are you sure you want to delete this user?')) {
        this.deleteUser(userID);
      }
    },
    updateProduct(product) {
      this.updateProduct({ prodID: product.id, ...product });
    },
    deleteProduct(prodID) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.deleteProduct(prodID);
      }
    }
  },
    addUser() {
      if (this.newUser.name && this.newUser.email && this.newUser.password) {
        this.$store.dispatch('register', this.newUser).then(() => {
          this.showAddUserForm = false;
          this.newUser = { name: '', email: '', password: '' };
        });
      } else {
        alert('Please fill in all fields.');
      }
    },
  mounted() {
    this.fetchUsers();
    this.fetchProducts();
  }
}

</script>

<style scoped>

img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 3rem;
}


.admin-tables {
  margin: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  vertical-align: middle; 
}

.table th {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #f5f5f5;
}

button {
  margin-right: 5px;
  color: #fff;

}

.add-user-button {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.add-user-form {
  margin: 0 auto;
  margin-bottom: 20px;
  
}

.add-user-form input {
  display: block;
  margin-bottom: 0.5rem !important;
  margin-top: 0.5rem !important;
  padding: 8px;
  width: 30%;
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 5px 2px 5px 2px !important;
}

.add-user-form button {
  margin-right: 10px;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>