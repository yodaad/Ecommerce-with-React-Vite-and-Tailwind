import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartCountContext } from "../../Context";
import PropTypes from "prop-types";
import { Modal } from "../Modal";
import { Cart } from "../Cart";
import { SignIn } from "../SignIn";

const NavItem = ({ to, children, onClick }) => (
  <li>
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-medium" : undefined
      }
    >
      {children}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const Navbar = () => {
  const {
    count,
    openCartModal,
    setOpenCartModal,
    openSignInModal,
    setOpenSignInModal,
    categories,
    setSearchByCategory,
  } = useContext(CartCountContext);

  const handleCategoryClick = (category) => {
    setSearchByCategory(category);
  };

  const handleAllClick = () => {
    setSearchByCategory(null);
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-slate-100">
      <ul className="flex items-center gap-3">
        <NavItem to="/">
          <img
            className="h-9 w-auto mr-9"
            src="/src/Assets/logo.jpg"
            alt="logo"
            onClick={() => handleAllClick()}
          />
        </NavItem>
        <NavItem to="/all" onClick={() => handleAllClick()}>
          All
        </NavItem>
        {categories.map((category) => (
          <NavItem
            key={category}
            to={`/category/${category}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </NavItem>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">yodaadgmail.com</li>
        <NavItem to="/my-orders">My Orders</NavItem>
        <NavItem to="/my-account">My Account</NavItem>
        <NavItem to="/sign-in" onClick={() => setOpenSignInModal(true)}>
          Sign In
        </NavItem>
        <li className="flex items-center">
          <ShoppingCartIcon
            className="h-6 w-6 text-blue-500 cursor-pointer"
            onClick={() => setOpenCartModal(true)}
          />
          <div>{count}</div>
        </li>
      </ul>
      {openCartModal && (
        <Modal>
          <Cart closeModal={() => setOpenCartModal(false)} />
        </Modal>
      )}
      {openSignInModal && (
        <Modal>
          <SignIn closeModal={() => setOpenSignInModal(false)} />
        </Modal>
      )}
    </nav>
  );
};

export { Navbar };
