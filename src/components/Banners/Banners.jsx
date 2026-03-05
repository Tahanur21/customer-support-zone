import bgImage1 from "../../assets/vector1.png";

const Bannars = ({selects,complete}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 py-10">
     <div className="relative col-span-1 w-full h-70  mx-auto rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-700 to-purple-500 flex flex-col justify-center items-center text-white">

      <img
        src={bgImage1}
        alt="Left wave"
        className="absolute left-0 top-0 h-full object-cover pointer-events-none"
      />

      <img
        src={bgImage1}
        alt="Right wave"
        className="absolute right-0 top-0 h-full object-cover pointer-events-none transform scale-x-[-1]"
      />

      <h2 className="text-2xl font-bold z-10">In-Progress</h2>
      <p className="text-4xl font-bold z-10">{selects.length}</p>
    </div>
    <div className="relative col-span-1 w-full h-70 mx-auto rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-green-600 to-teal-500 flex flex-col justify-center items-center text-white">

      <img
        src={bgImage1}
        alt="Left wave"
        className="absolute left-0 top-0 h-full object-cover pointer-events-none"
      />

      <img
        src={bgImage1}
        alt="Right wave"
        className="absolute right-0 top-0 h-full object-cover pointer-events-none transform scale-x-[-1]"
      />
      <h2 className="text-2xl font-bold z-10">Resolve</h2>
      <p className="text-4xl font-bold z-10">{complete.length}</p>
    </div>
    </div>
  );
};

export default Bannars;
