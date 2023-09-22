import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="flex justify-between my-3 border-2 bg-slate-50 border-black rounded-lg p-2">
      <p>
        <span className="flex justify-between mx-4">Order date: {date}</span>
        <span className="flex justify-between mx-4">
          Amount of products: {totalProducts}
        </span>
        <span className="flex justify-between mx-4">
          Order total: {totalPrice}
        </span>
      </p>
      <ChevronDoubleRightIcon className="h-6 w-6  text-black cursor-pointer" />
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export { OrdersCard };
