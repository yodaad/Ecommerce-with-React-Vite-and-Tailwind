import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartCountContext } from "../../Context";
import { Layout } from "../../Components/Layout";

const SignOut = () => {
  const { account, setSignUp, setAccount } = useContext(CartCountContext);

  const handleSignOutClick = () => {
    setSignUp(false);
    setAccount((prevAccount) => ({
      ...prevAccount,
      email: "",
      password: "",
    }));
  };

  return (
    <Layout>
      <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[520px] h-[235px] mt-10">
        <h2 className="flex justify-center items-center text-2xl font-bold mt-4 mb-2">
          Welcome {account.name}
        </h2>
        <h3 className="flex justify-center items-center text-2xl font-bold mb-4">
          Do you want to sign out?
        </h3>
        <NavLink to="/sign-in">
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-blue-500  text-white cursor-pointer
                rounded-lg text-lg w-3/4 h-10 my-2 p-4"
              onClick={handleSignOutClick}
            >
              Yes
            </button>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-blue-500  text-white cursor-pointer
                rounded-lg text-lg w-3/4 h-10 my-2 p-4"
            >
              No
            </button>
          </div>
        </NavLink>
      </div>
    </Layout>
  );
};

export { SignOut };
