import React from "react";
import Image from "next/image";
import "./../globals.css"
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <section className="py-20 px-15 w-1/2 md:w-1/3 bg-blue-400 h-screen flex flex-col">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={"/images/Vector.png"}
            alt="#"
            height={10}
            width={100}
          ></Image>
          <h1 className="text-3xl text-white font-bold">MeDrive</h1>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl text-white font-bold">
            Manage your file the
            <br /> best way Possible
          </h1>
          <p className="text-md text-white">
            awesome we have created a perfect place to store all
            <br /> your file and
            documents
          </p>
        </div>

        <div className="m-10">
          <Image
            src={"/images/illustration.png"}
            alt="#"
            height={10}
            width={280}
          />
        </div>
      </section>
      {children}
    </div>
  );
};

export default layout;
