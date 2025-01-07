import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const NavBar = () => {
  const navigations = [
    { name: "Home", to: "" },
    { name: "Portfolio", to: "" },
    { name: "Our Team", to: "team" },
    { name: "Contact Us", to: "" },
  ];
  return (
    <nav className="fixed top-[5%] left-1/2 -translate-x-1/2 border border-[#2d2d2d] rounded-2xl py-4 flex shadow-[0_0_20px_10px_rgba(28,28,28,0.25)] backdrop-blur-sm  z-50">
      <Logo className="px-6 border-r border-[#2d2d2d]" />
      <ul className="flex justify-center items-center space-x-16 mx-12">
        {navigations.map(({ name, to, idx }) => {
          return (
            <Link
              className={`text-xs text-[#dbdbdb] ${
                name === "Contact Us" ? "text-primary" : ""
              }`}
              href={to}
              key={idx}
            >
              {name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
