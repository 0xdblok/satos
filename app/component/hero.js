import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
export default function Hero() {
  return (
    <div>
      <div className="flex justify-between px-12 ">
        <div>
          {" "}
          <Image className="" src={hero} alt="" width={460} height={460} />{" "}
        </div>
        <div className="text-center w-1/2">
          <div className="flex gap-4 justify-center">
            <a>logo</a>
            <a>logo</a>
            <a>logo</a>
            <a>logo</a>
          </div>
          <h1 className="pt-2">$SATOSHI</h1>
          <h2>FATHER OF BITCOIN</h2>{" "}
          <p>
            $SATOSHI is a memecoin with a big mission: celebrate Satoshi and his
            invention, Bitcoin, in the day of the halving.
          </p>
          <div className="flex justify-center w-1/2">
            <Image
              className=""
              src="https://fatherofbitcoin.xyz/images/8c713eeb4ade0a7227e5a06076084117.svg"
              alt=""
              width={60}
              height={60}
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
