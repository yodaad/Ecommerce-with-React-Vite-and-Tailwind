import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  console.log(date);
  return (
    <div className="flex justify-between items-center my-3 border border-black">
      <p>
        <span>{date}</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export { OrdersCard };
