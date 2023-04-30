import React, { FC, useState } from "react";
import Link from "./Link";
import { Icon } from "@iconify/react";
import { icons } from "../utils/icons";
import type { SupportedIcons } from "../utils/icons";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";

interface ILinktreeProps {
  link: string | string[];
  artistProfiles: string[];
  icon: SupportedIcons;
  notificationText?: string;
  iconSize?: number;
  platform: string;
}

const Tree: FC<ILinktreeProps> = ({
  artistProfiles,
  link,
  icon,
  notificationText,
  platform,
  iconSize = 25,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-4 font-montserrat">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="scale-card w-80 rounded-xl bg-yellow-600 p-2 "
      >
        <div className="ml-4 flex place-items-center">
          <div className="flex w-8 ">
            <Icon
              icon={icons[icon]}
              height={iconSize}
              className="text-[#0f0f0f]"
            />
          </div>
          <p className=" ml-5 text-xs font-bold text-[#0f0f0f]">
            Check out my {platform}
          </p>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {notificationText && (
              <div className="mt-3 flex ">
                <article className="ml-4 w-72 text-sm">
                  {notificationText}
                </article>
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-5"
            >
              {Array.isArray(link)
                ? artistProfiles.map((profile, index) => (
                    <Link
                      key={index}
                      link={link[index]}
                      height={25}
                      icon={icon}
                      text={profile}
                    />
                  ))
                : artistProfiles.map((profile, index) => (
                    <Link
                      key={index}
                      link={link}
                      height={25}
                      icon={icon}
                      text={profile}
                    />
                  ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tree;
