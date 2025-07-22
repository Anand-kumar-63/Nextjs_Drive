import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
const SideBar = () => {
  return (
    <aside className="w-1/5 bg-white h-[100%] flex flex-col items-center justify-around">
      <nav>
        <ul className="flex flex-col items-center gap-2 justify-center">
          <Link href={"/dashboard"}>
            <button className="navheads">
              <Image
                src={"/images/dashboard.png"}
                alt="dashboard"
                height={10}
                width={16}
              ></Image>
              DashBoard
            </button>
          </Link>
          <Link href={"/documents"}>
            <button className="navheads">
              <Image
                src={"/images/documents.png"}
                alt="dashboard"
                height={12}
                width={20}
              ></Image>
              Documents
            </button>
          </Link>
          <Link href={"/images"}>
            <button className="navheads">
              <Image
                src={"/images/images.png"}
                alt="dashboard"
                height={12}
                width={20}
              ></Image>
              Images
            </button>
          </Link>
          <Link href={"/media"}>
            <button className="navheads">
              <Image
                src={"/images/camera.png"}
                alt="dashboard"
                height={12}
                width={20}
              ></Image>
              Media
            </button>
          </Link>
          <Link href={"/others"}>
            <button className="navheads">
              <Image
                src={"/images/others.png"}
                alt="dashboard"
                height={12}
                width={20}
              ></Image>
              Others
            </button>
          </Link>
        </ul>
      </nav>
      {/* //image section */}
      <div className="flex flex-col items-center">
        <div className="relative mb-2">
          <div className="absolute bottom-0 -right-10 bg-blue/20 rounded-b-4xl h-15 w-58"></div>
          <Image
            src={"/images/illustration.png"}
            alt="Logo"
            height={10}
            width={160}
          ></Image>
        </div>
        {/* //Login logout */}
        <div className="flex flex-row w-[230px] bg-gray-200 rounded-4xl">
          <span className="-mr-2 h-[55px]  mb-2">
            <Image
              src={"/images/Avatar.png"}
              alt="Avatar"
              height={12}
              width={80}
            ></Image>
          </span>
          <span className="flex flex-col justify-center">
            <p className="text-gray-6 text-[14px]">Adrian JsMastery </p>
            <p className="text-gray-400 text-[14px]">Adrian@gmail.com</p>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
