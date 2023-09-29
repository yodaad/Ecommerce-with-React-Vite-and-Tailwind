import { useContext } from "react";
import { CartCountContext } from "../../Context";
import { Layout } from "../../Components/Layout";

function MyAccount() {
  const { name, email } = useContext(CartCountContext);

  return (
    <Layout>
      <div className="flex flex-col relative bg-zinc-50 border-2 border-blue-500 rounded-lg w-[500px] h-[240px] mt-10">
        <h2 className="flex justify-center items-center text-2xl font-bold my-4">
          My Account
        </h2>
        <div className="my-4 ml-6">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center items-center bg-blue-500 rounded-lg text-white text-lg w-3/4 h-10 mt-4 mb-2 p-4 cursor-pointer">
            Edit
          </button>
        </div>
      </div>
    </Layout>
  );
}

export { MyAccount };
