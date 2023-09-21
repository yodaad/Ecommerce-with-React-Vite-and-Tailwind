import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartCountContext = createContext();

const CartCountProvider = ({ children }) => {
  // Shopping cart - Increment quantity
  const [count, setCount] = useState(0);
  // Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  // Cart modal
  const [openCartModal, setOpenCartModal] = useState(false);

  // Checkout Cart order
  const [order, setOrder] = useState([]);

  // Product Detail Modal - Open/Close
  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);

  // Product Detail Modal - Show product
  const [productToShow, setProductToShow] = useState({});

  const addProductsToCart = (productData) => {
    setCount(count + 1);

    const existingProduct = cartProducts.findIndex(
      (product) => product.id === productData.id
    );

    if (existingProduct !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingProduct].quantity += 1;
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts([...cartProducts, { ...productData, quantity: 1 }]);
    }
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
        openCartModal,
        setOpenCartModal,
        order,
        setOrder,
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
