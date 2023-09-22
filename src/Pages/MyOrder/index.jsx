import { useContext } from "react";
import { CartCountContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";

const MyOrder = () => {
  const { order } = useContext(CartCountContext);

  return (
    <Layout>
      My Order
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
