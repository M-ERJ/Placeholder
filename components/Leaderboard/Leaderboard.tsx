import { Leader, leaders } from "./leaderModel";

import LeadingArtist from "./LeadingArtist";

export default function Leaderboard() {
  const sortedLeaders = [...leaders].sort(
    (a, b) => b.numberOfSwipes - a.numberOfSwipes,
  );
  return (
    <>
      <div className="flex items-center ">
        <div className="bg-[#e6e6e6] rounded ">
          {sortedLeaders.map((leader: Leader) => (
            <LeadingArtist
              key={leader.key}
              image={leader.image}
              name={leader.name}
              numberOfSwipes={leader.numberOfSwipes}
            />
          ))}
        </div>
      </div>
    </>
  );
}
