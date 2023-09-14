import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartCountContext = createContext();

const CartCountProvider = ({ children }) => {
  // Shopping cart - Increment quantity
  const [count, setCount] = useState(0);
  // Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail Modal - Open/Close
  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);

  // Product Detail Modal - Show product
  const [productToShow, setProductToShow] = useState({});

  const addProductsToCart = (productData) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
  };

  return (
    <CartCountContext.Provider
      value={{
        count,
        setCount,
        openProductDetailModal,
        setOpenProductDetailModal,
        productToShow,
        setProductToShow,
        addProductsToCart,
        cartProducts,
        setCartProducts,
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
