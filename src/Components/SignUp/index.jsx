const SignUp = () => {
  return (
    <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[500px] h-[390px] mt-10">
      <h2 className="flex justify-center items-center text-2xl font-bold my-4">
        Welcome
      </h2>
      <div className="my-4 mx-6">
        <p>Your name: </p>
        <input
          type="text"
          placeholder="Peter"
          className="rounded-lg border border-blue-500 w-full my-2 p-1"
        />
        <p>Your email: </p>
        <input
          type="text"
          placeholder="peter@peterland.com"
          className="rounded-lg border border-blue-500 w-full my-2 p-1"
        />
        <p>Your password: </p>
        <input
          type="text"
          className="rounded-lg border border-blue-500 w-full my-2 p-1"
        />
      </div>
      <div className="flex justify-center">
        <button className="flex justify-center items-center bg-blue-500 rounded-lg text-white text-lg w-3/4 h-10 my-2 p-4 cursor-pointer">
          Create Account
        </button>
      </div>
    </div>
  );
};

export { SignUp };
