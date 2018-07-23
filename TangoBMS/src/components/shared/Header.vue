<template>
    <div id="header">
        <div class="color-line"></div>
        <div id="logo"><span> Tango BMS </span> </div>
        <nav role="navigation">
            <div class="header-link hide-menu" ng-click="minimalize()"><i class="fa fa-bars"></i></div>
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
                        <a href="#" uib-dropdown-toggle>
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
</template>

<script>

</script>