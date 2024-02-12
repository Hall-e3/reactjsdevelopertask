"use client";
import React, { useEffect, useState } from "react";
import Avatar from "../Avatar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Syllabus() {
  const [syllabuses, setSyllabuses] = useState<{ name: string }[]>([]);

  useEffect(() => {
    fetch("/api/syllabuses")
      .then((response) => response.json())
      .then((data) => setSyllabuses(data));
  }, []);


  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-[1260px] mx-auto py-10 h-full">
        <div className="flex flex-col space-y-2">
          {syllabuses.map((syllabus, index) => (
            <div key={index} className="flex items-center justify-between border-b py-3">
              <div className="flex flex-row items-center space-x-3">
                <Avatar src="/images/math-calculator.png" styles="object-contain" alt="avatar" height={50} width={50} />
                <h4 className="font-bold text-black">{syllabus.name}</h4>
              </div>
              <div>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
