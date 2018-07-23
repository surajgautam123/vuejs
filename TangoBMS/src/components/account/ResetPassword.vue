<template>
    <div>
        <div class="color-line"></div>
        <div class="login-container" ng-controller="RestPasswordCtrl as resetCtrl">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center m-b-md">
                    <h2>Tango BMS</h2>
                    </div>
                    <div class="hpanel">
                    <div class="panel-heading">Reset Password</div>
                        <div class="panel-body">
                            <p>
                                Enter your email address and your password will be reset and emailed to you.
                            </p>
                             <form role="form" name="reset_form" novalidate="novalidate"
                                    ng-submit="resetCtrl.reset(reset_form);"
                                    validate-on-form-submit="true">
                                <div class="form-group">
                                  <label class="control-label" for="username">Email</label>
                                  <input type="email" placeholder="example@example.com" class="form-control" ng-model="resetCtrl.email" name="email" required>
                            </div>
                                <button class="btn btn-success btn-block" type="submit">Reset password
                                </button>
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
    
</script>