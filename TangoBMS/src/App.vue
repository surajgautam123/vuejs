<template>
    <div id="app" v-bind:class="[isActive ? 'show-sidebar' : 'hide-sidebar']">
        <!-- <app-header v-if="authenticated"></app-header> -->
        <div id="header" v-if="authenticated">
	        <div class="color-line"></div>
	        <div id="logo"><span> Tango BMS </span> </div>
	        <nav role="navigation">
	            <div class="header-link hide-menu" @click="minimalize()"><i class="fa fa-bars"></i></div>
	            <div class="small-logo">
	                <span class="text-primary">Tango BMS</span>
	            </div>
	            <div class="mobile-menu">
	                <button type="button" class="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
	                    <i class="fa fa-chevron-down"></i>
	                </button>
	                <div class="collapse mobile-navbar" id="mobile-collapse">
	                    <ul class="nav navbar-nav">
	                        <li>
	                            <a ui-sref="common.login">Login</a>
	                        </li>
	                        <li>
	                            <a ui-sref="common.register">Logout</a>
	                        </li>
	                        <li>
	                            <a ui-sref="admin.profile">Profile</a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            <div class="navbar-right">
	                <ul class="nav navbar-nav no-borders">
	                    <li uib-dropdown>
	                        <a href="#" data-toggle="dropdown">
	                            <i class="pe-7s-speaker"></i>
	                        </a>
	                        <ul uib-dropdown-menu class="hdropdown notification animated flipInX dropdown-menu">
	                            <li>
	                                <a>
	                                    <span class="label label-success">NEW</span> It is a long established.
	                                </a>
	                            </li>
	                            <li>
	                                <a>
	                                <span class="label label-warning">WAR</span> There are many variations.
	                                </a>
	                            </li>
	                            <li>
	                                <a>
	                                <span class="label label-danger">ERR</span> Contrary to popular belief.
	                                </a>
	                            </li>
	                            <li class="summary"><a href="#">See all notifications</a></li>
	                        </ul>
	                    </li>
	                    <li>
	                        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace><i class="pe-7s-upload pe-rotate-90"></i></router-link>
	                    </li>
	                </ul>
	            </div>
	        </nav>
	    </div>
	    <!-- Start: Sidebar -->
        <app-sidebar v-if="authenticated"></app-sidebar>
        <!-- End: Sidebar -->

		<template v-if="authenticated">
	        <div id="wrapper">
		        <router-view @authenticated="setAuthenticated" />
		    </div>
	    </template>
		<template v-else>
	        <div class="row">
	            <div class="col-md-12">
	            	<router-view @authenticated="setAuthenticated" />
	            </div>
	        </div>
        </template>

        <!-- Start: Footer -->
        <app-footer></app-footer>
        <!-- End: Footer -->
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue';
    import Footer from './components/shared/Footer.vue';
    import Sidebar from './components/shared/Sidebar.vue';
    export default {
    	name: 'App',
        components: {
            appHeader: Header,
            appFooter: Footer,
            appSidebar: Sidebar
        },
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "sipl",
                    password: "1234"
                },
                isActive: true
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            },
            minimalize(){
				// Check value
				if(this.isActive){
					this.isActive = false;
				}else{
					this.isActive = true;
				}
			}
        }
    }
</script>

<style>
    
</style>