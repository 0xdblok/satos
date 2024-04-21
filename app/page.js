import Image from "next/image";
import Nav from "./component/nav";
import Hero from "./component/hero";
import blanc from "./asset/blanc.png";
import Matrix from "./component/matrix";
import All from "./component/all";
import Tokenomics from "./component/tokenomics";
import Footer from "./component/footer";
import bleu from "./asset/bleu.png";
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
      <Matrix />
      <div className="w-full">
        {" "}
        <Image
          className="w-full"
          src={bleu}
          alt=""
          width={560}
          height={560}
        />{" "}
      </div>
      <All />
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
      <Tokenomics />
      <Footer />
      dsf
    </div>
  );
}
