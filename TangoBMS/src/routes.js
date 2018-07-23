import LoginComponent from "./components/account/Login.vue"
import ResetPassword from './components/account/ResetPassword.vue';
import Dashboard from './components/Dashboard.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import CostingList from './components/costing/list.vue';
import OrdersManagement from './components/orders/order-management.vue';
import AdminProfile from './components/admin/profile.vue';


export const routes = [
	{ path: '/reset-password', component: ResetPassword },
	{ path: '/dashboard', name: "dashboard", component: Dashboard },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/stocks', component: Stocks},

	{ path: '/',   
		redirect: {
            name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    { path: '/costing-list', component: CostingList},
    { path: '/orders-management', component: OrdersManagement},
    { path: '/profile', component: AdminProfile}
]