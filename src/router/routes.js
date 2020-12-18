import HomePage from "../pages/home-page/sections";
import UiKit from "../ui-kit";
import Test from "components/test";

const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/product/:id",
    component: null,
  },
  {
    path: "/category/:id",
    component: null,
  },
  {
    path: "/ui-kit",
    component: UiKit,
  },
  {
    path: "/test",
    component: Test,
  },
];

export default routes;
