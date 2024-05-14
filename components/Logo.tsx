import Image from "next/image";
import { FaEllipsisVertical } from "react-icons/fa6";

const icon = (
  <FaEllipsisVertical
    className="inline-block mr-2 h-6 w-6"
    style={{ color: "#3e3e3e" }}
  />
);
export default function Logo() {
  return (
    <>
      <Image
        width={75}
        height={75}
        src="/plug.png"
        className="mr-3"
        alt="Logo"
      />
      <span className="text-4xl font-extrabold whitespace-nowrap text-pi-purple-main">
        Plugged In <span>{icon}</span>
      </span>
    </>
  );
}
