import LoginComponent from "./components/account/Login.vue"
import ResetPassword from './components/account/ResetPassword.vue';
import ChangePassword from './components/account/ChangePassword.vue';
import Dashboard from './components/Dashboard.vue';
import DatabaseFactories from './components/database/factories/list.vue';
import AddFactories from './components/database/factories/manage.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import LabelStock from './components/stocks/LabelStock.vue';
import YarnStock from './components/stocks/YarnStock.vue';
import CostingList from './components/costing/list.vue';
import CostingSheet from './components/costing/index.vue';
import OrdersManagement from './components/orders/order-management.vue';
import AdminProfile from './components/admin/profile.vue';


export const routes = [
	{ path: '/reset-password', component: ResetPassword },
    { path: '/change-password', component: ChangePassword },
	{ path: '/dashboard', name: "dashboard", component: Dashboard },
    { path: '/tango-factories', name: "tango-factories", component: DatabaseFactories },
    { path: '/add-factories', component: AddFactories },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/label-stock', component: LabelStock},
    { path: '/yarn-stock', component: YarnStock},

	{ path: '/',   
		redirect: {
            name: "login"
        }
    },
    { path: "/login", name: "login", component: LoginComponent },
    { path: '/costing-list', component: CostingList },
    { path: '/costing-sheet', component: CostingSheet },
    { path: '/orders-management', component: OrdersManagement },
    { path: '/profile', component: AdminProfile }
]