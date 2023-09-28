import { useRoutes, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { CartCountContext } from "../../Context";
import { Footer } from "../../Components/Footer";
import { Home } from "../../Pages/Home";
import { MyAccount } from "../../Pages/MyAccount";
import { MyOrder } from "../../Pages/MyOrder";
import { MyOrders } from "../../Pages/MyOrders";
import { NotFound } from "../../Pages/NotFound";
import { Navbar } from "../Navbar";

const AppRoutes = () => {
  const { categories } = useContext(CartCountContext);

  const categoryRoutes = categories.map((category) => ({
    path: `/category/${category}`,
    element: <Home categoryID={category} />,
  }));

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/all", element: <Home /> },
    ...categoryRoutes,
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <Home /> },
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
