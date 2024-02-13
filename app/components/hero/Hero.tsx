"use client";
import { Button } from "..";
import Avatar from "../Avatar";
import Container from "../Container";
import React from "react";

export default function Hero() {
  return (
    <Container>
      <section className="w-full py-20">
        <div className="w-full flex flex-row gap-3 relative overflow-hidden">
          <div className="w-full h-full hidden md:block">
            <Avatar src="/images/Enoch.jpeg" styles="object-cover h-full w-full rounded-3xl" alt="avatar" height={80} width={100} />
          </div>
          <div className="h-full w-full flex flex-col items-center justify-center px-6 space-y-2 bg-mobileBackgroundImage md:bg-none">
            <p className="text-gray_color text-[20px] font-medium">For every student, every classroom. Real results.</p>
            <p className="text-[13px] sm:text-[15px]">We are a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
            <div className="w-full">
              <Button text="Start here" onClick={() => {}} buttonStyle="px-5 py-3 rounded-md bg-blue-700 text-white" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
