import PropTypes from "prop-types";

function ProductDetail({ closeModal }) {
  return (
    <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[1200px] h-[90vh]">
      <button
        className="absolute top-0 right-0 p-3 border-none bg-transparent text-zinc-500 cursor-pointer"
        onClick={() => closeModal(false)}
      >
        X
      </button>
      <h2 className="flex justify-center items-center text-2xl font-bold mt-14">
        Product Detail
      </h2>
    </div>
  );
}

ProductDetail.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export { ProductDetail };
