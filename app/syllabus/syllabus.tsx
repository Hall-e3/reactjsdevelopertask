"use client";
import React, { useEffect, useState } from "react";
import { SyllabusList } from "../components";
import { useSyllabusContext } from "../context/SyllabusContext";

const SyllabusPage = () => {
  const { state } = useSyllabusContext();

  if (state.loading) {
    return <div>Loading...</div>; // Render a loading component while data is being fetched
  }

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <SyllabusList syllabuses={state.syllabuses} />
    </section>
  );
};

export default SyllabusPage;
