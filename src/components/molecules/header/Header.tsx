import Image from "next/image";
import Link from "next/link";

import logo from "@/public/gigaclear.svg";

const Header: React.FC = () => {
  return (
    <header className="h-[80px] w-full bg-primary-default px-4 md:px-0">
      <div className="m-auto lg:max-w-screen-xl h-full">
        <div className="lg:px-8 h-full flex items-center justify-between">
          <Link href={"/"}>
            <Image src={logo} alt="Gigaclear logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
