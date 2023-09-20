import { useContext } from "react";
import { CartCountContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import PropTypes from "prop-types";

const Cart = ({ closeModal }) => {
  const { cartProducts } = useContext(CartCountContext);
  console.log("Cart: ", cartProducts);
  return (
    <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[1000px] h-[800px]">
      <button
        className="absolute top-0 right-0 p-3 border-none bg-transparent text-zinc-500 cursor-pointer"
        onClick={() => closeModal(false)}
      >
        X
      </button>
      <h2 className="flex justify-center items-center text-2xl font-bold mt-14">
        My Order
      </h2>
      {cartProducts.map((product) => (
        <OrderCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

Cart.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export { Cart };
