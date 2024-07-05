import Image from "next/image";
import Link from "next/link";

import { NewItemProps } from "./types";

export const NewItem = ({ cover, logo, rate }: NewItemProps) => {
  return (
    <Link
      href={"#"}
      className="relative inline-block h-[340px] w-[228px] overflow-hidden rounded-md"
    >
      <Image src={cover} fill alt="" />

      <Image
        src={"/images/rate.svg"}
        width={70}
        height={84}
        alt="rate"
        className="absolute left-0 top-0"
      />
      <div className="absolute left-0 top-0 flex w-[70px] flex-col items-center justify-center">
        <div className="text-xl text-white">Top</div>
        <div className="text-3xl font-extrabold text-white">{rate}</div>
      </div>
      {logo && (
        <div className="absolute bottom-0 z-10 flex w-full justify-center">
          <div className="relative bottom-0">
            <Image src={logo} alt="" width={46} height={206} className="" />
          </div>
        </div>
      )}
    </Link>
  );
};
