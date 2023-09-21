import { useContext } from "react";
import { CartCountContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import PropTypes from "prop-types";

const Cart = ({ closeModal }) => {
  const { cartProducts, setCartProducts, count, setCount } =
    useContext(CartCountContext);

  const handleDelete = (id) => {
    const filteredCart = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredCart);
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[1000px] h-[800px]">
      <button
        className="absolute top-0 right-0 p-3 border-none bg-transparent text-zinc-500 cursor-pointer z-10"
        onClick={() => closeModal(false)}
      >
        X
      </button>
      <h2 className="flex justify-center items-center text-2xl font-bold mt-14">
        My Order
      </h2>
      <div className="px-8 overflow-y-scroll">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            quantity={product.quantity}
            title={product.title}
            image={product.image}
            price={`$${product.price * product.quantity}`}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export { Cart };
