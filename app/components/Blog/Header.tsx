import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex  justify-center items-center px-10 py-5 md:px-24 max-w-[1000px] mx-auto ">
      <Link href={"/"} className="text-2xl font-bold underline">
       Engineering Blogs 
      </Link>

      
    </header>
  );
};

export default Header;