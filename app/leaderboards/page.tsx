import Leaderboard from "@/components/Leaderboard/Leaderboard";

const Leaderboards = () => {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-8 font-extrabold">
        Leaderboards
      </h1>
      <div className="grid grid-cols-3 space-x-2">
        <div>
          <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-2 font-extrabold">
            {" "}
            Today{" "}
          </h2>
          <Leaderboard />
        </div>
        <div>
          <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-2 font-extrabold">
            {" "}
            Weekly{" "}
          </h2>
          <Leaderboard />
        </div>
        <div>
          <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-2 font-extrabold">
            {" "}
            Yearly{" "}
          </h2>
          <Leaderboard />
        </div>
      </div>
    </>
  );
};

export default Leaderboards;
