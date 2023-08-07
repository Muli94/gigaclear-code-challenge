import Image from "next/image";

import logo from "@/public/gigaclear.svg";

const Header: React.FC = () => {
  return (
    <header className="h-[80px] w-full bg-primary-default">
      <div className="m-auto lg:max-w-screen-xl h-full">
        <div className="lg:px-8 h-full flex items-center justify-between">
          <Image src={logo} alt="Gigaclear logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
