"use client";
import { Button } from "..";
import Avatar from "../Avatar";
import Container from "../Container";
import React from "react";

export default function Hero() {
  return (
    <Container>
      <section className="py-20">
        <div className="flex flex-row gap-3">
          <div className="w-full h-full ">
            <Avatar src="/images/Enoch.jpeg" styles="object-cover h-full w-full rounded-3xl" alt="avatar" height={100} width={100} />
          </div>
          <div className="flex flex-col justify-center px-6 space-y-2">
            <p className="text-gray_color text-[20px] font-medium">For every student, every classroom. Real results.</p>
            <p className="text-[13px] sm:text-[15px]">We are a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
            <div>
              <Button text="Start here" onClick={() => {}} buttonStyle="px-5 py-3 rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
