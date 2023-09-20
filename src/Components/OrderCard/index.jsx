import PropTypes from "prop-types";

const OrderCard = (props) => {
  const { title, image, price } = props;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-md font-semibold">{price}</p>
        <button className="absolute top-0 right-0 p-3 border-none bg-transparent text-zinc-500 cursor-pointer">
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
