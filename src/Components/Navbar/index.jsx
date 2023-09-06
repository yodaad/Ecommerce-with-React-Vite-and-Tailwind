import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import PropTypes from "prop-types";

const NavItem = ({ to, children }) => (
  <li>
    <NavLink
      to={to}
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
};

const Navbar = () => {
  const { count, setCount } = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-slate-100">
      <ul className="flex items-center gap-3">
        <NavItem to="/">
          <img
            className="h-9 w-auto mr-9"
            src="/src/Assets/logo.jpg"
            alt="logo"
          />
        </NavItem>
        <NavItem to="/all">All</NavItem>
        <NavItem to="/clothes">Clothes</NavItem>
        <NavItem to="/electronics">Electronics</NavItem>
        <NavItem to="/furniture">Furniture</NavItem>
        <NavItem to="/toys">Toys</NavItem>
        <NavItem to="/others">Others</NavItem>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">yodaadgmail.com</li>
        <NavItem to="/my-orders">My Orders</NavItem>
        <NavItem to="/my-account">My Account</NavItem>
        <NavItem to="/sign-in">Sign In</NavItem>
        <li>Carrito {count}</li>
      </ul>
    </nav>
  );
};

export { Navbar };
