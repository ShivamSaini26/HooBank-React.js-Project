

export const Analytics = () => {
  return (
    <div className="ss:w-full h-full sm:max-w-4xl mx-auto text-white text-[10px] p-3 mt-10 bg-mygradient2 flex flex-wrap flex-col ss:flex-row backdropshadow">
      <h1 className="text-white font-serif font-bold text-2xl p-4 inline mx-auto ">
        4500+{" "}
        <span className="font-thin text-base text-gradient">Active Users</span>
      </h1>
      
      <h1 className="text-white font-serif font-bold text-2xl p-4 inline mx-auto">
        230{" "}
        <span className="font-thin text-base text-gradient">
          Trusted By Company
        </span>
      </h1>
      
      <h1 className="text-white font-serif font-bold text-2xl p-4 inline mx-auto ">
        ₹349CR{" "}
        <span className="font-thin text-base text-gradient">Transaction</span>
      </h1>
    </div>
  );
}

export default Analytics