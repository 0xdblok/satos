import Image from "next/image";
import Nav from "./component/nav";
import Hero from "./component/hero";
import blanc from "./asset/blanc.png";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="w-full">
        {" "}
        <Image
          className="w-full"
          src={blanc}
          alt=""
          width={560}
          height={560}
        />{" "}
      </div>
      dsf
    </div>
  );
}
