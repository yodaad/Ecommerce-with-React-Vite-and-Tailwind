import PropTypes from "prop-types";

const SignIn = ({ closeModal }) => {
  return (
    <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[1100px] h-[800px]">
      <button
        className="absolute top-0 right-0 p-3 border-none bg-transparent text-zinc-500 cursor-pointer z-10"
        onClick={() => closeModal(false)}
      >
        X
      </button>
      <h2 className="flex justify-center items-center text-2xl font-bold mt-14">
        Sign In
      </h2>
      <input></input>
    </div>
  );
};

SignIn.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export { SignIn };
