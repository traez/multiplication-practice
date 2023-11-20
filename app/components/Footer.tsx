/*
the Footer component doesn't appear to directly interact with the application's global state (StateContext), it serves as a section that offers essential information about the application, including links and copyright details, providing users with relevant information and navigation options.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Footer() {
  const {} = useContext(StateContext)!;

  return (
    <footer className="p-2 flex flex-row justify-center items-center gap-8 text-sm border-t-2 border-traeGreen4 border-solid">
      <a
        href="https://github.com/traez/multiplication-practice"
        target="_blank"
        className=" hover:underline hover:text-traeGreen6 font-bold text-traeGreen9"
      >
        Multiplication Practice
      </a>
      <b>©2023 Trae Zeeofor</b>
    </footer>
  );
}
