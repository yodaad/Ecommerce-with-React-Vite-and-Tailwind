import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCountContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(CartCountContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      <div className="flex flex-wrap ml-20 mt-5">
        {order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export { MyOrders };
