<template>
    <div>
        <div class="color-line"></div>
        <div class="login-container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center m-b-md">
                    <h2>Tango BMS</h2>
                    </div>
                    <div class="hpanel">
                    <div class="panel-heading">Reset Password</div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="alert alert-success" v-if="submitStatus === 'OK'">
                                        <strong>Success!</strong> Thanks for your submission!
                                    </div>
                                    <div class="alert alert-danger" v-if="submitStatus === 'ERROR'">
                                        <strong>Info!</strong> Please fill the form correctly.
                                    </div>
                                    <div class="alert alert-info" v-if="submitStatus === 'PENDING'">
                                        <strong>Info!</strong> Sending...
                                    </div>
                                </div>
                            </div>
                            <p>
                                Enter your email address and your password will be reset and emailed to you.
                            </p>
                             <form @submit.prevent="submit" ref="form">
                                <div class="form-group" :class="{ 'invalid': $v.email.$error }">
                                    <label class="control-label" for="email">Email</label>
                                    <input type="email" id="email" v-model="email" name="email" placeholder="example@example.com" class="form-control">
                                    <div class="error" v-if="!$v.email.required && submitStatus === 'ERROR'">{{ errormsg }}</div>
                                    <div class="error" v-if="!$v.email.email">Please provide a valid email address.</div>
                                </div>
                                <button type="submit" class="btn btn-success btn-block" title="Reset password" :disabled="submitStatus === 'PENDING'">Reset password</button>
                                <router-link to="/" class="btn btn-default btn-block"><i aria-hidden="true" class="fa fa-arrow-circle-o-left"></i> Back to Login</router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            email: '',            
            submitStatus: null,
            errormsg: 'This field is required'
        };
    },
    validations: {
        email: {
            required,
            email
        }
    },
    methods: {
        submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                  this.submitStatus = 'OK'
                  // Reset form data
                  //this.$refs.form.reset()
                  Object.assign(this.$data, this.$options.data.call());
                  // Page Re-direct after submit
                  // this.$router.replace({ name: "tango-factories" });
                }, 500);
            }
        },
    
    },
}
</script>
<style>
.visible{visibility: visible;}
.error{color:#FF0000;}
.hpanel .alert{font-size:14px; margin-bottom:22px;}
</style>