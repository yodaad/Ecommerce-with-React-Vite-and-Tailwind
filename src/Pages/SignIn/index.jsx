import { useState } from "react";
import { useContext } from "react";
import { CartCountContext } from "../../Context";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Layout } from "../../Components/Layout";
import { SignUp } from "../../Components/SignUp";

function SignIn() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userAuth, setUserAuth] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const { account, setSignUp } = useContext(CartCountContext);
  const { saveInfo, getInfo } = useLocalStorage("Account");

  const toggleSignUp = () => {
    setShowSignUp(true);
  };

  const handleLoginClick = () => {
    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;
    const storedAccount = getInfo();

    if (
      storedAccount &&
      inputEmail === storedAccount.email &&
      inputPassword === storedAccount.password
    ) {
      saveInfo({
        signup: true,
      });
      setSignUp(true);
      setUserAuth(true);
      console.log("userAuth at click: ", userAuth);
      window.location.href = "/";
    } else {
      setUserAuth(false);
      setShowWelcome(false);
      console.log("Invalid credentials");
    }
  };

  return (
    <Layout>
      {showSignUp ? (
        <SignUp />
      ) : userAuth ? (
        <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[500px] h-[110px] mt-10">
          {console.log("UserAuth on div: ", userAuth)}
          <h2 className="flex justify-center items-center text-2xl font-bold mt-10 mb-2">
            Welcome {account.name}!
          </h2>
        </div>
      ) : (
        <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[500px] h-[410px] mt-10">
          {!userAuth && showWelcome ? (
            <h2 className="flex justify-center items-center text-2xl font-bold mt-4 mb-2">
              Welcome!
            </h2>
          ) : (
            <h2 className="flex justify-center items-center text-2xl text-red-600 font-bold mt-4 mb-2">
              Invalid credentials
            </h2>
          )}
          <h2 className="flex justify-center items-center text-2xl font-bold mb-2">
            Please sign in or sign up.
          </h2>
          <div className="my-4 mx-6">
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter your account's email"
              className="rounded-lg border border-blue-500 w-full my-2 p-1"
              id="email"
            />
            <p>Password </p>
            <input
              type="text"
              placeholder="Enter your account's password"
              className="rounded-lg border border-blue-500 w-full my-2 p-1"
              id="password"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-blue-500  text-white cursor-pointer
               rounded-lg text-lg w-3/4 h-10 my-2 p-4"
              onClick={handleLoginClick}
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-blue-500  text-white cursor-pointer
               rounded-lg text-lg w-3/4 h-10 my-2 p-4"
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
