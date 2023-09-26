import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="flex justify-between m-4 border-2 bg-slate-100 border-blue-500 rounded-lg p-2">
      <div>
        <span className="flex justify-between mx-4">
          <p className="text-medium font-bold"> Order date: </p>
          {date}
        </span>
        <span className="flex justify-between mx-4">
          <p className="text-medium font-bold">Amount of products:&nbsp; </p>
          {totalProducts}
        </span>
        <span className="flex justify-between mx-4">
          <p className="text-medium font-bold">Order total:</p>
          {"$"} {totalPrice}
        </span>
      </div>
      <ChevronDoubleRightIcon className="h-6 w-6  text-blue-500 cursor-pointer" />
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export { OrdersCard };
