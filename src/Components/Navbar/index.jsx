import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ to, children, customStyle }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `text-blue-600 font-medium ${customStyle}` : customStyle
      }
    >
      {children}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  customStyle: PropTypes.string,
};

const Navbar = () => (
  <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
    <ul className="flex items-center gap-3">
      <NavItem customStyle="font-semibold text-lg text-current" to="/">
        Shopi
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
      <li>Carrito 0</li>
    </ul>
  </nav>
);

export { Navbar };
