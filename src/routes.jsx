import { createBrowserRouter } from "react-router-dom";

// 1. Pages (src/pages 폴더 바로 밑에 있는 것들)
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Register from "./components/pages/Register";
import CategoryProducts from "./components/pages/CategoryProducts";

// 2. Auth (src/components/auth 폴더 안)
// routes.jsx (확장자 빼고 불러보기)
import OAuthMessageHandler from "./components/auth/OAuthMessageHandler";
import Login from "./components/auth/Login"; 
import Logout from "./components/auth/Logout";

// 3. Features (src/components/features 폴더 안 - 여기가 에러의 주범!)
// 사진을 보면 ProductDetail은 여기에 있어!
import ProductDetail from "./components/features/buyer/ProductDetail"; 
import SellerDashboard from "./components/features/seller/SellerDashboard";
import SellerProducts from "./components/features/seller/SellerProducts";
import SellerOrders from "./components/features/seller/SellerOrders";
import { LogOut } from "lucide-react";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/oauth-callback",
    Component: OAuthMessageHandler,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/logout",
    Component: Logout,
  },
  {
    path: "/category/:category",
    Component: CategoryProducts,
  },
  {
    path: "/seller",
    Component: SellerDashboard,
  },
  {
    path: "/seller/products",
    Component: SellerProducts,
  },
  {
    path: "/seller/orders",
    Component: SellerOrders,
  },
]);
