import React from "react";
import Image from "next/image";
export default function Nav() {
  return (
    <div>
      <div className="flex px-16 pt-8 w-full">
        {" "}
        <Image
          className=""
          src="https://fatherofbitcoin.xyz/images/8c713eeb4ade0a7227e5a06076084117.svg"
          alt=""
          width={56}
          height={56}
        />
      </div>
    </div>
  );
}
