import type { FC } from "react";
import type { SupportedIcons } from "../utils/icons";
import { Icon } from "@iconify/react";
import { icons } from "../utils/icons";
import logo from "../assets/revived-logo.svg";

interface ICustomButtonProps {
  link: string;
  icon: SupportedIcons;
  text: string;
}

const CustomButton: FC<ICustomButtonProps> = ({ link, icon, text }) => {
  console.log(`../assets/${icons[icon]}`);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="scale-card mt-4 inline-block w-96 rounded-xl bg-custom-yellow p-2"
    >
      <div className="ml-4 flex place-items-center">
        <div className="flex w-8 justify-center">
          {icon === "revived" ? (
            <img src={logo} alt="revived" className="h-8 w-8" />
          ) : (
            <Icon
              icon={icons[icon]}
              height={25}
              className="mr-2 text-[#0f0f0f]"
            />
          )}
        </div>
        <p className=" ml-5 text-sm font-bold text-[#0f0f0f]">{text}</p>
      </div>
    </a>
  );
};

export default CustomButton;
