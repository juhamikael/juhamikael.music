import { Icon } from "@iconify/react";
import type { FC } from "react";
import type { SupportedIcons } from "../utils/icons";
import { icons } from "../utils/icons";
import "../styles/globals.css";
interface ILinkProps {
  link: string;
  icon: SupportedIcons;
  text: string;
  height: number;
}

const Link: FC<ILinkProps> = ({ link, height, icon, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="text-white ">
      <div className="scale-card mt-3 flex w-96 flex-row place-items-center rounded-xl bg-green-700 p-4 ">
        <div className="w-8 justify-center">
          <Icon icon={icons[icon]} height={height} />
        </div>
        <p className="ml-5 ">{text}</p>
      </div>
    </a>
  );
};

export default Link;
