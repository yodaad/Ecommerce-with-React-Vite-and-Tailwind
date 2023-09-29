import PropTypes from "prop-types";

const SignIn = ({ closeModal }) => {
  return (
    <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[500px] h-[280px]">
      <button
        className="absolute top-0 right-0 p-3 border-none bg-transparent text-zinc-500 cursor-pointer z-10"
        onClick={() => closeModal(false)}
      >
        X
      </button>
      <h2 className="flex justify-center items-center text-2xl font-bold mt-14">
        Sign In Page
      </h2>
      <input
        type="text"
        placeholder="Enter your email to sign in"
        className="flex justify-center items-center border border-blue-300 roundeg-lg my-6 mx-10 p-2 focus:outline-none"
      />
      <div className="flex">
        <button className="flex justify-center items-center bg-blue-500 rounded-lg text-white text-lg w-56 h-6 mx-36 mt-5 p-4 cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export { SignIn };
