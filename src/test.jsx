import React from "react";

const test = (type) => {
  return (
    <>
      <a
        class={`scale-card mt-5 flex h-10 w-36 cursor-pointer items-center justify-center rounded-lg  border border-yellow-300 text-yellow-300`}
      >
        <span class="mr-3 flex flex-row place-content-center place-items-center ">
          {hasIcon && (
            <Icon pack={iconPack} name={iconName} size={20} class="mr-2" />
          )}
          <span>{text}</span>
        </span>
      </a>
    </>
  );
};

export default test;
