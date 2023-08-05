import React from "react";
import {twMerge as tm} from "tailwind-merge";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  title: string;
  bgColor: "dark-blue" | "blue" | "transparent";
};

export const Button = ({
  title,
  bgColor,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={tm(
        `font-bold text-white py-[12px] px-[17px] text-base rounded-[3px] cursor-pointer`,
        className,
        bgColor === "dark-blue" && "bg-blue-100 hover:bg-blue-800",
        bgColor === "blue" && "bg-blue-200 hover:bg-opacity-60",
        bgColor === "transparent" &&
          "bg-transparent text-gray-100 hover:text-blue-100"
      )}
      {...props}
    >
      {title}
    </button>
  );
};
