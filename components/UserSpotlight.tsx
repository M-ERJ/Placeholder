import { FaCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { profile } from "console";
import Link from "next/link";

export default function UserSpotlight() {
  const pathName = usePathname();
  const href = "/profile";
  return (
    <div className="flex items-center">
      <Link href={href}>
        <FaCircleUser fill="black" className="mr-2 h-14 w-14" />
      </Link>
      <div className="flex flex-col">
        <Link href={href}>
          <span className="text-1xl font-bold tracking-normal text-black/60">
            User Name
          </span>
        </Link>
        <span className="text-sm font-normal tracking-normal text-black/60">
          Location, UK
        </span>
      </div>
    </div>
  );
}
