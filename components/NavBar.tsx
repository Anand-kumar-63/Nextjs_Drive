import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-15 bg-white px-10 pt-2 pb-4">
      <button className="flex flex-row items-center gap-4">
        <Image
          src={"/images/redlogo.png"}
          alt="logo"
          height={8}
          width={40}
        ></Image>
        <h1 className="text-lg font-bold text-black">Me Drive</h1>
      </button>


      
    </div>
  );
};

export default NavBar;
