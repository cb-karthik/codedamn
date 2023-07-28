"use client";
import React from "react";
import SearchBox from "./SearchBox";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

function Header() {
  useSession({ required: true });

  return (
    <div className="flex flex-row w-full justify-between sticky pl-5 pr-5">
      <Link href="/">
        <div className="text-gray-900 text-2xl font-bold  pl-5 pt-5 justify-between">
          Codedamn
        </div>
      </Link>

      <div className="mt-3 sm:mt-0">
        <SearchBox />
      </div>
    </div>
  );
}

export default Header;
