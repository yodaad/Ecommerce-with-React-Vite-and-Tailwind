import { createContext, useEffect, useState } from "react";
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

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

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

  function fetchProducts() {
    return fetch("https://fakestoreapi.com/products").then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  }

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);

  console.log("filetered Items: ", filteredItems);

  useEffect(() => {
    fetchProducts()
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
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
