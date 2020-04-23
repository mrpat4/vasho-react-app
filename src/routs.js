import HomeScreen from "./website/screen/HomeScreen";
import productScreen from "./website/screen/productScreen";

const routes = [
  {
    exact: true,
    path: "/",
    component: HomeScreen,
  },
  {
    path: "/product-page",
    component: productScreen,
  },
];

export default routes;
