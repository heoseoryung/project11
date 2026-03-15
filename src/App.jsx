import { RouterProvider } from "react-router";
import { router } from "./routes.jsx";
import {Toaster} from "./components/product/Toaster";
import "./index.css"; // css꼭추가하기!!

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}