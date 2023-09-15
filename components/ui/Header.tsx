import { Button } from "./button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-16 py-5 bg-white flex justify-between items-center">
      <h1 className="font-bold text-xl tracking-wider">JUSTBLOG</h1>
      <div className="hidden md:flex items-center gap-24">
        <nav>
          <ul className="flex items-center gap-7">
            <li>
              <Link href="/">Explore</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <Button>Sign in</Button>
      </div>
    </header>
  );
};

export default Header;
