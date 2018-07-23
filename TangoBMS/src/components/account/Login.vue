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
                <form>
                  <div class="form-group">
                    <label class="control-label">User Name</label>
                    <input type="text" name="username" v-model="input.username" placeholder="User Name" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="control-label" for="password">Password</label>
                    <input type="password" name="password" v-model="input.password" placeholder="Password" class="form-control" />
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
                    <button type="button" class="btn btn-success btn-block" title="Login" v-on:click="login()">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "dashboard" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
  .login-container .checkbox input[type=checkbox]{position: relative; margin: 0; top: 2px;}
</style>