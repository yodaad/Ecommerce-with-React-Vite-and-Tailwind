import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCountContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";

const MyOrder = () => {
  const { order } = useContext(CartCountContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-96 mb-2">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col">
        {order?.slice(-1)[0]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            quantity={product.quantity}
            title={product.title}
            image={product.image}
            price={parseFloat(product.price * product.quantity)}
          />
        ))}
      </div>
    </Layout>
  );
};

export { MyOrder };
