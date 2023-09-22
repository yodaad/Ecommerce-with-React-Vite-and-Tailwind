import PropTypes from "prop-types";

const OrderCard = (props) => {
  const { id, title, image, price, quantity, handleDelete } = props;
  let renderX;
  if (handleDelete) {
    renderX = (
      <button
        onClick={() => handleDelete(id)}
        className="border-none bg-transparent text-zinc-500 cursor-pointer"
      >
        X
      </button>
    );
  }

  const roundedPrice = parseFloat(price).toFixed(2);

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
        <p className="ml-4 mr-1"> X {quantity}</p>
        <p className="text-sm font-medium ml-4 mr-10">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold mr-4">$ {roundedPrice}</p>
        {renderX}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
};

export { OrderCard };
