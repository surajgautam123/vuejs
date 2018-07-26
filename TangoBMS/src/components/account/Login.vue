<template>
  <div id="login">
    <div class="color-line"></div>
    <div class="login-container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center m-b-md">
            <h1>Tango BMS</h1>
          </div>
          <div class="hpanel">
            <div class="panel-heading">Login</div>
            <div class="panel-body">
              <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
              <p class="typo__p error" v-if="submitStatus === 'ERROR'">Invalid username or password.</p>
              <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
              <form @submit.prevent="submit">
                <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
                  <label class="control-label">User Name</label>
                  <input type="text" name="username" v-model.trim="$v.username.$model" placeholder="User Name" class="form-control" />
                  <div class="error" v-if="!$v.username.required && submitStatus === 'ERROR'">Name is required</div>
                  <div class="error" v-if="!$v.username.minLength">Name must have at least {{$v.username.$params.minLength.min}} letters.</div>
                </div>
                <div class="form-group">
                  <label class="control-label" for="password">Password</label>
                  <input type="password" name="password" v-model.trim="$v.password.$model" placeholder="Password" class="form-control" />
                  <div class="error" v-if="!$v.password.required && submitStatus === 'ERROR'">Password is required</div>
                  <div class="error" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</div>
                </div>
                <div class="col-md-7 p-l0">
                  <div class="checkbox">
                    <input type="checkbox"> Remember my login
                  </div>
                </div>
                <div class="col-md-5 link-forgot-password">
                  <router-link to="/reset-password">Forgot password?</router-link>
                </div>

                <div class="col-md-12 text-center">
                  <button type="submit" :disabled="submitStatus === 'PENDING'" class="btn btn-success btn-block" title="Login">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre>{{$v}}</pre>
  </div>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      submitStatus: null
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
    // email: {
    //   required
    // },
    password: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else if(this.username == this.$parent.mockAccount.username && this.password == this.$parent.mockAccount.password) {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          this.$emit("authenticated", true);
          this.$router.replace({ name: "dashboard" });
        }, 500)
      }
    }
  }
}

</script>
<style scoped>
.login-container .checkbox input[type=checkbox] {
  position: relative;
  margin: 0;
  top: 2px;
}
.error{color:#FF0000;}

</style>
