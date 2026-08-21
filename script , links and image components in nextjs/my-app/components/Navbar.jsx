import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold">
        Logo
      </h1>

      <ul className="flex gap-6">
        <Link href="/">
          <li>Home</li>
        </Link>

        <Link href="/about">
          <li>About</li>
        </Link>

        <Link href="/services">
          <li>Services</li>
        </Link>

        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      <button className="px-4 py-2 rounded bg-blue-500 text-white">
        Login
      </button>
    </nav>
  );
};

export default Navbar;