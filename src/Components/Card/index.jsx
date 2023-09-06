import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="bg-zinc-50 border-2 border-slate-300 cursor-pointer w-80 h-96 rounded-lg p-1 relative">
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
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
        <span className="absolute flex justify-center items-center bg-blue-500 w-20 h-5 rounded-full text-white mt-7 p-4">
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
    // Add other prop validations here as needed
  }).isRequired,
};

export { Card };
