import PropTypes from "prop-types";

const OrderCard = (props) => {
  const { title, image, price } = props;
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex items-center gap-4">
        <figure className="w-16">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-medium mx-10">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold mr-4">{price}</p>
        <button className="border-none bg-transparent text-zinc-500 cursor-pointer">
          X
        </button>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export { OrderCard };
