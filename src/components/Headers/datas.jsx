import React from "react";
import { Button } from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";

export function Logo() {
  return (
    <div>
      <svg
        width="48px"
        height="48px"
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        class=""
        fill-rule="evenodd"
      >
        <path
          class="rui-w4DG7"
          d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
        ></path>
      </svg>
    </div>
  );
}
export const SellBTN = () => {
  return (
    <Button className="relative text-secondary font-extrabold sm:shadow-none shadow-xl h-16 w-16 sm:h-11 sm:w-24  rounded-full bg-white p-1 sm:p-3 py-4">
      <span
        className=" cursor-pointer before:absolute before:inset-1 before:rounded-full before:border-[6px]
      before:border-t-yellow-400 before:border-r-teal-400 before:border-b-blue-500 before:border-l-yellow-400"
      />
      <div className=" flex text-2xl sm:text-sm sm:gap-1 justify-center hover:scale-100 space-x-1 px-3 rounded-full">
        <FaPlus className="" />
        <span className="font-extrabold text-xs hidden sm:block">SELL</span>
      </div>
    </Button>
  );
};
