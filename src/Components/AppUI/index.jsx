import { useRoutes, BrowserRouter } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Home } from "../../Pages/Home";
import { MyAccount } from "../../Pages/MyAccount";
import { MyOrder } from "../../Pages/MyOrder";
import { MyOrders } from "../../Pages/MyOrders";
import { NotFound } from "../../Pages/NotFound";
import { SignIn } from "../../Pages/SignIn";
import { Navbar } from "../Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const AppUI = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export { AppUI };
