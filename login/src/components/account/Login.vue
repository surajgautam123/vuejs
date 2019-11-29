<template>
  <div class="login-form">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h2 class="mb-4">Login</h2>
        <form @submit.prevent="submitForm" autocomplete="off">
          <div class="form-group">
            <label for="username">User name</label>
            <input type="text" v-model="form.name" @keyup="errors.name = false" name="username" value="" placeholder="Username" class="form-control" />
            <p v-if="errors.name" class="error-message">User name is Required</p>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="form.password" @keyup="errors.password = false" name="password" value="" placeholder="Password" class="form-control" />
            <p v-if="errors.password" class="error-message">Password is Required</p>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" title="Login">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      form:{
        name: '',
        password: '',
      },
      errors:{
        name: false,
        password: false
      }
    }
  },
  computed: {

  },
  methods: {
    submitForm(){
      let self = this;
      if (self.form.name && self.form.password) {
        console.log("Form Submitted");
        const formData = {
          name: this.form.name,
          password: this.form.password
        }
        console.log(formData);
        axios.post('https://vuelogin-ffdba.firebaseio.com/users.json', formData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
        return true;
      }
      else{
        console.log("Show Error");
      }
      if (self.form.name == '') {
          self.errors.name = true;
      };
      if (self.form.password == '') {
          self.errors.password = true;
      }
      //e.preventDefault();
    },
  }
  
}
</script>
<style scoped>
.error-message{
  color:#FF0000;
}
</style>