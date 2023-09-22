import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center my-3 border border-black">
      <p>
        <span>01.02.203</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export { OrdersCard };
