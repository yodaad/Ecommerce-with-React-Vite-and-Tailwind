import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartCountContext = createContext();

const CartCountProvider = ({ children }) => {
  // Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail Modal - Open/Close
  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);

  // Product Detail Modal - Show product
  const [productToShow, setProductToShow] = useState({});

  return (
    <CartCountContext.Provider
      value={{
        count,
        setCount,
        openProductDetailModal,
        setOpenProductDetailModal,
        productToShow,
        setProductToShow,
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
