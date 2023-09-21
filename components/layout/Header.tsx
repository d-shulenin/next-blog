"use client";

import { Button } from "../shadcn/ui/button";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const session = useSession();

  const handleSignOut = () => {
    signOut();
  };

  const handleSignIn = () => {
    signIn();
  };

  return (
    <header className="px-8 md:px-12 xl:px-16 py-5 bg-white flex justify-between items-center">
      <h1 className="font-bold text-xl tracking-wider">BLOG</h1>
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
        {session.status === "authenticated" ? (
          <Button onClick={handleSignOut}>Sign out</Button>
        ) : (
          <Button onClick={handleSignIn}>Sign in</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
