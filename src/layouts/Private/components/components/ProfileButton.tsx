import { NavLink } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";

import { DropdownWrapper } from "components";
import { cn } from "helpers";
import { useGlobalProvider } from "hooks";

export const ProfileButton = () => {
  const { isDarkTheme } = useGlobalProvider();

  return (
    <DropdownWrapper
      buttonClassName="bg-primary rounded-[10px] p-2.5 text-white flex items-center text-base"
      dropdownClassName={cn(
        "bg-secondary uppercase rounded-[20px] w-[135px] font-inder divide-y divide-white px-[5px] mt-1 border border-black",
        { "bg-dark text-white": isDarkTheme }
      )}
      buttonContent={
        <>
          <span className="w-5 h-5 bg-gray-100 rounded-full mr-2.5">
            <img
              src="/images/profile-thumb.jpg"
              alt="Jane Doe"
              className="rounded-full"
            />
          </span>
          <span className="font-inder leading-[20px] mr-1 hidden sm:block">
            Rajan Shahi
          </span>
          <HiOutlineChevronDown />
        </>
      }
    >
      <ul className="divide-y divide-white">
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-2.5 hover:text-primary"
          >
            <HiOutlineCog className="text-[20px]" /> Settings
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            className="flex items-center gap-3 p-2.5 hover:text-primary uppercase"
          >
            <HiOutlineLogout className="text-[20px]" /> Logout
          </button>
        </li>
      </ul>
    </DropdownWrapper>
  );
};
