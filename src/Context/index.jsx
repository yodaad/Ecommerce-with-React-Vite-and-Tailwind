import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CartCountContext = createContext();

const CartCountProvider = ({ children }) => {
  // Signup
  const [signup, setSignUp] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

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
  const [filteredItems, setFilteredItems] = useState([]);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  // Get categories
  const [categories, setCategories] = useState([]);

  const account = { name, email, password, signup, order };

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

  useEffect(() => {
    fetchProducts()
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  function fetchCategories() {
    return fetch("https://fakestoreapi.com/products/categories").then(
      (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
    );
  }

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(
      (item) => item.category.toLowerCase() === searchByCategory.toLowerCase()
    );
  };

  const filterItems = (items, searchByTitle, searchByCategory) => {
    let filtered = items;

    if (searchByTitle) {
      filtered = filteredItemsByTitle(filtered, searchByTitle);
    }

    if (searchByCategory) {
      filtered = filteredItemsByCategory(filtered, searchByCategory);
    }

    return filtered;
  };

  useEffect(() => {
    const filtered = filterItems(items, searchByTitle, searchByCategory);
    setFilteredItems(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, searchByTitle, searchByCategory]);

  return (
    <CartCountContext.Provider
      value={{
        signup,
        setSignUp,
        count,
        setCount,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        account,
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
        categories,
        setCategories,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
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
