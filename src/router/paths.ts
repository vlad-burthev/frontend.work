//images
import CustomersIcon from "../assets/images/routes/customers-icon.svg?react";
import DashboardIcon from "../assets/images/routes/dashboard-icon.svg?react";
import HelpIcon from "../assets/images/routes/help-icon.svg?react";
import IncomeIcon from "../assets/images/routes/income-icon.svg?react";
import ProductIcon from "../assets/images/routes/product-icon.svg?react";
import PromoteIcon from "../assets/images/routes/promote-icon.svg?react";
//active images
import CustomersIconActive from "../assets/images/routes/customers-icon-active.svg?react";
import DashboardIconActive from "../assets/images/routes/dashboard-icon-active.svg?react";
import HelpIconActive from "../assets/images/routes/help-icon-active.svg?react";
import IncomeIconActive from "../assets/images/routes/income-icon-active.svg?react";
import ProductIconActive from "../assets/images/routes/product-icon-active.svg?react";
import PromoteIconActive from "../assets/images/routes/promote-icon-active.svg?react";

//pages
import CustomersPage from "../pages/customers";
import DashboardPage from "../pages/dashboard";
import HelpPage from "../pages/help";
import IncomePage from "../pages/income";
import ProductPage from "../pages/product";
import PromotePage from "../pages/promote";

export const paths = {
  dashboard: {
    name: "Dashboard",
    route: "/",
    component: DashboardPage,
    img: DashboardIcon,
    active: DashboardIconActive,
  },
  product: {
    name: "Product",
    route: "product",
    component: ProductPage,
    img: ProductIcon,
    active: ProductIconActive,
  },
  customers: {
    name: "Customers",
    route: "customers",
    component: CustomersPage,
    img: CustomersIcon,
    active: CustomersIconActive,
  },
  income: {
    name: "Income",
    route: "income",
    component: IncomePage,
    img: IncomeIcon,
    active: IncomeIconActive,
  },
  promote: {
    name: "Promote",
    route: "promote",
    component: PromotePage,
    img: PromoteIcon,
    active: PromoteIconActive,
  },
  help: {
    name: "Help",
    route: "help",
    component: HelpPage,
    img: HelpIcon,
    active: HelpIconActive,
  },
};
