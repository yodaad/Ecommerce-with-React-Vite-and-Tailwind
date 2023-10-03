import { useRoutes, BrowserRouter } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { CartCountContext } from "../../Context";
import { Footer } from "../../Components/Footer";
import { Home } from "../../Pages/Home";
import { MyAccount } from "../../Pages/MyAccount";
import { MyOrder } from "../../Pages/MyOrder";
import { MyOrders } from "../../Pages/MyOrders";
import { SignIn } from "../../Pages/SignIn";
import { NotFound } from "../../Pages/NotFound";
import { Navbar } from "../Navbar";

const AppRoutes = () => {
  const { categories, setName, setEmail, setPassword, setSignUp } =
    useContext(CartCountContext);
  const { getInfo } = useLocalStorage("Account");

  useEffect(() => {
    const storedAccount = getInfo();
    storedAccount &&
      (({ name, email, password, signup }) => {
        setName(name);
        setEmail(email);
        setPassword(password);
        setSignUp(signup);
      })(storedAccount);
  });

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
