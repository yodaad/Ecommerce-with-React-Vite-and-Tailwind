import PropTypes from "prop-types";

function ProductDetail({ closeModal }) {
  return (
    <div>
      <button onClick={() => closeModal(false)}>X</button>
      <div>Product Detail</div>
    </div>
  );
}

ProductDetail.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export { ProductDetail };
