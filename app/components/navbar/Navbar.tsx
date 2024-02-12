"use client";

import { ChangeEvent } from "react";
// passing data from server component to client component results to a warning
// Only plain objects can be passed to client component from server components
// date objects are not supported

import Container from "../Container";
import Input from "../Input";
import Logo from "./Logo";
import { ArrowTopRightOnSquareIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex items-center space-x-6">
              <MenuItem onClick={() => {}} label="Courses" iconRight={<ChevronDownIcon className="h-5 w-5" />} />
              <Input
                styles="border py-2 rounded-md px-3"
                placeholder="Search"
                value={""}
                onChange={() => {}}
                iconRight={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Logo />
            <div className="hidden md:flex md:items-center md:space-x-6">
              <MenuItem onClick={() => {}} label="Donate" iconRight={<ArrowTopRightOnSquareIcon className="h-5 w-5" />} />
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
