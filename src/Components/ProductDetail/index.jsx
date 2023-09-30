import { NavLink } from "react-router-dom";
import { CartCountContext } from "../../Context";
import { useContext } from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ closeModal }) => {
  const { productToShow, setProductToShow, addProductsToCart, signup } =
    useContext(CartCountContext);

  return (
    <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[1000px]">
      <button
        className="absolute top-0 right-0 p-3 border-none bg-transparent text-zinc-500 cursor-pointer"
        onClick={() => closeModal(false)}
      >
        X
      </button>
      <h2 className="flex justify-center items-center text-2xl font-bold mt-14">
        Product Detail
      </h2>
      <figure className="flex justify-center items-center  px-6 mt-5">
        <img
          className="w-96 h-96 object-contain rounded-lg"
          src={productToShow.image}
          alt={productToShow.title}
        ></img>
      </figure>
      <p className="flex flex-col p-6">
        <span className="text-2xl font-bold mt-3 mb-2">
          {productToShow.title}
        </span>
        <span>{productToShow.description}</span>
        <span className="flex justify-between items-center mt-8">
          {signup ? (
            <>
              <span
                className="flex justify-center items-center bg-blue-500 w-36 h-10 rounded-full text-white text-lg p-4 cursor-pointer"
                onClick={() => {
                  setProductToShow(productToShow);
                  addProductsToCart(productToShow);
                }}
              >
                Buy
              </span>
            </>
          ) : (
            <span className="flex justify-center items-center bg-blue-500 w-36 h-10 rounded-full text-white text-lg p-4 cursor-pointer">
              <NavLink to="/sign-in">Buy</NavLink>
            </span>
          )}
          <span className="text-2xl font-semibold">
            $ {productToShow.price}
          </span>
        </span>
      </p>
    </div>
  );
};

ProductDetail.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export { ProductDetail };
