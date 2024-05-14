"use client";

import { FaHeart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import Link from "next/link";
import Logo from "./Logo";
import { MdLeaderboard } from "react-icons/md";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import UserSpotlight from "./UserSpotlight";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathName = usePathname();
  const menuList = [
    {
      icon: <FaMagnifyingGlass className="inline-block mr-2 h-6 w-6" />,
      href: "/discover",
      aria: "Link to discover page",
    },
    {
      icon: <FaHeart className="inline-block mr-2 h-6 w-6" />,
      href: "/likes",
      aria: "Link to liked tracks",
    },
    {
      icon: <PiMusicNotesPlusFill className="inline-block mr-2 h-6 w-6" />,
      href: "/create-music",
      aria: "Link to upload music",
    },
    {
      icon: <MdLeaderboard className="inline-block mr-2 h-6 w-6" />,
      href: "/leaderboards",
      aria: "Link to leaderboard page",
    },
    {
      icon: <IoPersonSharp className="inline-block mr-2 h-6 w-6" />,
      href: "/profile",
      aria: "Link to profile",
    },
  ];
  return (
    <nav className="bottom-bar fixed bottom-0 left-0 z-50 w-[100vw]  flex justify-around items-center h-16 hidden">
      {/* <ul className="flex flex-row justify-evenly"> */}
      {menuList.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center justify-center h-full w-full ${pathName === item.href ? "text-pi-purple-main" : "text-gray-500"} hover:text-pi-purple-main transition duration-150 ease-in-out`}
        >
          {item.icon}
        </Link>
      ))}
      {/* </ul> */}
    </nav>
  );
};

export default BottomBar;
