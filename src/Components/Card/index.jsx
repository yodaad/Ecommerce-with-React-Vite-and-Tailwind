const Card = () => {
  return (
    <div className="bg-zinc-50 border-2 border-slate-300 cursor-pointer w-80 h-96 rounded-lg p-1">
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/846357/pexels-photo-846357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="headphones"
        />
      </figure>
      <p className="flex justify-between my-3 mx-2">
        <span className="text-sm font-300">Headphones</span>
        <span className="text-lg font-medium">$300</span>
        <div className="absolute flex justify-center items-center bg-blue-500 w-20 h-5 rounded-full text-white mt-7 ml-28 p-4">
          Buy
        </div>
      </p>
    </div>
  );
};

export { Card };
