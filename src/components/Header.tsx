"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="text-5xl text-white font-semibold">
          Logo
        </Link>
        <button className="menu">menu</button>
      </div>
    </header>
  );
};

export default Header;
