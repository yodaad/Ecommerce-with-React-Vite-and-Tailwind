import { useState } from "react";
import { Layout } from "../../Components/Layout";
import { SignUp } from "../../Components/SignUp";

function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <Layout>
      {showSignUp ? (
        <SignUp />
      ) : (
        <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[500px] h-[270px] mt-10">
          <h2 className="flex justify-center items-center text-2xl font-bold my-4">
            Welcome
          </h2>
          <div className="my-4 ml-6">
            <p>Email: </p>
            <p>Password: </p>
          </div>
          <div className="flex justify-center">
            <button className="flex justify-center items-center bg-blue-500 rounded-lg text-white text-lg w-3/4 h-10 my-2 p-4 cursor-pointer">
              Log In
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-blue-500 rounded-lg text-white text-lg w-3/4 h-10 my-2 p-4 cursor-pointer"
              onClick={toggleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export { SignIn };
