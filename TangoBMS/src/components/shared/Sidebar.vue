<template>
    <aside id="menu">
        <div id="navigation">
            <div class="profile-picture">
                <router-link to="/profile">
                    <img src="../../assets/images/profile.jpg" class="img-circle m-b" alt="logo">
                </router-link>

                <div class="stats-label text-color">
                    Welcome<br>
                    <span class="font-extra-bold font-uppercase">Suraj Gautam</span>

                    <div class="dropdown" uib-dropdown>
                        <a href="#" data-toggle="dropdown">
                            <small class="text-muted">Manager <b class="caret"></b></small>
                        </a>
                        <ul class="animated flipInX m-t-xs dropdown-menu">
                            <li><router-link to="/profile">Profile</router-link></li>
                            <li class="divider"></li>
                            <li><router-link to="/change-password">Change Password</router-link></li>
                            <li class="divider"></li>
                            <li><router-link v-if="!authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav" id="side-menu">
                <router-link to="/dashboard" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a><span class="nav-label">Dashboard</span></a></router-link>
                <router-link to="/tango-factories" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a><span class="nav-label">Tango Factories</span></a></router-link>
                <!-- <li v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a href="#demo" data-toggle="collapse" data-parent="#side-menu" data-traget="#demo"><span class="nav-label">Database</span><span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level collapse" id="demo">
                        <li><router-link to="/tango-factories">Tango Factories</router-link></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Freight Forwarders</a></li>
                        <li><a href="#">Trim Suppliers</a></li>
                        <li><a href="#">Label Suppliers</a></li>
                        <li><a href="#">Yarn Suppliers</a></li>
                        <li><a href="#">TUV's</a></li>
                        <li><a href="#">Print out Labels</a></li>
                        <li><a href="#">Employees</a></li>
                        <li><a href="#">Requirement Manuals</a></li>
                        <li><a href="#">Size Charts</a></li>
                    </ul>
                </li> -->
                <router-link to="/costing-list" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a><span class="nav-label">Costing</span></a></router-link>
                <router-link to="/orders-management" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a><span class="nav-label">Orders</span></a></router-link>
                <!-- <li>
                    <a href="#dropdown_stock_control" data-toggle="collapse" data-parent="#side-menu"  data-traget="#dropdown_stock_control"><span class="nav-label">Stock Control</span><span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level collapse" id="dropdown_stock_control">
                        <li><router-link to="/label-stock">Label Stock</router-link></li>
                        <li><router-link to="/yarn-stock">Yarn Stock</router-link></li>
                    </ul>
                </li>
                <li>
                	<a href="#dropdown_management" data-toggle="collapse" data-parent="#side-menu" data-traget="#dropdown_management"> <span class="nav-label">Management and Account</span><span class="fa arrow"></span></a>
	                <ul class="nav nav-second-level collapse" id="dropdown_management">
	                    <li><a href="#">Reports</a></li>
	                    <li><a href="#">Invoices</a></li>
	                </ul>
	            </li> -->
            </ul>
        </div>
    </aside>
</template>

<script>
	export default {
		data() {
            return {
                authenticated: false,
                isActive: true
            }
        },
        methods: {
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