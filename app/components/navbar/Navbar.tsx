"use client";

// passing data from server component to client component results to a warning
// Only plain objects can be passed to client component from server components
// date objects are not supported

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
