"use client";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { domainName } = useParams();

  return (
    <div className="flex items-center justify-center text-pretty text-4xl  h-screen w-screen">
      <h1>Mentors from domain : {domainName}</h1>
    </div>
  );
};

export default page;
