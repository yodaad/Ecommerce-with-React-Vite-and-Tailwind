import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartCountContext = createContext();

const CartCountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);

  return (
    <CartCountContext.Provider
      value={{
        count,
        setCount,
        openProductDetailModal,
        setOpenProductDetailModal,
      }}
    >
      {children}
    </CartCountContext.Provider>
  );
};

CartCountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartCountContext, CartCountProvider };
