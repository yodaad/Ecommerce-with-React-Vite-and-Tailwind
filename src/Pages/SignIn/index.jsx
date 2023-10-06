import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartCountContext } from "../../Context";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Layout } from "../../Components/Layout";
import { SignUp } from "../../Components/SignUp";

function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);
  const { account, setSignUp } = useContext(CartCountContext);
  const { saveInfo } = useLocalStorage("Account");

  const toggleSignUp = () => {
    if (!account.email && !account.password) {
      setShowSignUp(true);
    }
  };

  const handleLoginClick = () => {
    saveInfo({
      signup: true,
    });

    setSignUp(true);
  };

  return (
    <Layout>
      {showSignUp ? (
        <SignUp />
      ) : (
        <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[500px] h-[270px] mt-10">
          <h2 className="flex justify-center items-center text-2xl font-bold my-4">
            Welcome {account.name}
          </h2>
          <div className="my-4 ml-6">
            <p>Email: {account.email}</p>
            <p>Password: {account.password}</p>
          </div>
          <NavLink to="/">
            <div className="flex justify-center">
              <button
                className={`flex justify-center items-center ${
                  !account.email && !account.password
                    ? "bg-zinc-200 text-white cursor-default"
                    : "bg-blue-500  text-white cursor-pointer"
                } rounded-lg text-lg w-3/4 h-10 my-2 p-4`}
                onClick={handleLoginClick}
              >
                Log In
              </button>
            </div>
          </NavLink>
          <div className="flex justify-center">
            <button
              className={`flex justify-center items-center ${
                account.email && account.password
                  ? "bg-zinc-200 text-white cursor-default"
                  : "bg-blue-500  text-white cursor-pointer"
              } rounded-lg text-lg w-3/4 h-10 my-2 p-4`}
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
