import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
