import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-6 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Social Icons */}
          <Socials />

        </div>
      </div>
    </header>
  );
};

export default Header;
