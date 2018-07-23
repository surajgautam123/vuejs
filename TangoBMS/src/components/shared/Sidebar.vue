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
                            <li><router-link to="/login">Logout</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav" id="side-menu">
                <router-link to="/dashboard" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a><span class="nav-label">Dashboard</span></a></router-link>

                <router-link to="/#demo" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a data-toggle="collapse" data-parent="#side-menu" data-traget="#demo"><span class="nav-label">Database</span><span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level collapse" id="demo">
                        <li><a href="#">Factories</a></li>
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
                </router-link>
                <router-link to="/costing-list" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a><span class="nav-label">Costing</span></a></router-link>
                <router-link to="/orders-management" tag="li" v-bind:class="[isActive ? 'no-active' : 'active']" @click="isActive = !isActive"><a><span class="nav-label">Orders</span></a></router-link>
                <li>
                    <a href="#dropdown_stock_control" data-toggle="collapse" data-parent="#side-menu"  data-traget="#dropdown_stock_control"><span class="nav-label">Stock Control</span><span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level collapse" id="dropdown_stock_control">
                        <li><a href="#">Label Stock</a></li>
                        <li><a href="#">Yarn Stock</a></li>
                        <li><a href="#">Garment Stock</a></li>
                    </ul>
                </li>
                <li>
                	<a href="#dropdown_management" data-toggle="collapse" data-parent="#side-menu" data-traget="#dropdown_management"> <span class="nav-label">Management and Account</span><span class="fa arrow"></span></a>
	                <ul class="nav nav-second-level collapse" id="dropdown_management">
	                    <li><a href="#">Reports</a></li>
	                    <li><a href="#">Invoices</a></li>
	                </ul>
	            </li>
            </ul>
        </div>
    </aside>
</template>

<script>
	export default {
		data: function() {
            return {
                isActive: true
            }
        },
        methods: {
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