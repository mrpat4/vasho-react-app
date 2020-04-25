import HomeScreen from "./website/screen/HomeScreen";
import ProductScreen from "./website/screen/productScreen";
import StoreScreen from "./website/screen/StoreScreen";

const routes = [
  {
    exact: true,
    path: "/",
    component: HomeScreen,
  },
  {
    path: "/product-page",
    component: ProductScreen,
  },
  {
    path: "/store",
    component: StoreScreen,
  },
];

export default routes;
