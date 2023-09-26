import PropTypes from "prop-types";
import { CartCountContext } from "../../Context";
import { useContext } from "react";

const Card = ({ data }) => {
  const { setOpenProductDetailModal, setProductToShow, addProductsToCart } =
    useContext(CartCountContext);

  const showProduct = (productDetail) => {
    setOpenProductDetailModal(true);
    setProductToShow(productDetail);
  };

  return (
    <div className="bg-zinc-50 border-2 border-blue-300 w-76 h-96 rounded-lg p-2 relative">
      <figure
        className="relative cursor-pointer mb-3 w-full h-4/5"
        onClick={() => {
          showProduct(data);
        }}
      >
        <span className="absolute bottom-0 left-0 bg-blue-200/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={data.image}
          alt={data.title}
        />
      </figure>
      <p className="flex justify-between my-3 mx-2">
        <span className="text-sm font-300 truncate mr-2">{data.title}</span>
        <span className="absolute bottom-2 right-2 text-lg font-medium">
          $ {data.price}
        </span>
        <span
          className="absolute flex justify-center items-center cursor-pointer bg-blue-500 w-20 h-5 rounded-full text-white mt-7 p-4"
          onClick={() => {
            addProductsToCart(data);
          }}
        >
          Buy
        </span>
      </p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export { Card };
