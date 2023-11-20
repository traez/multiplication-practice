/*
the Home component acts as a central point for assembling the layout of the home page by organizing different sections and components. It uses global state information to conditionally display modals and provides a structured and organized layout for the user interface of the application's home view.
*/
"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Section from "./components/Section";
import ModalOne from "./components/ModalOne";
import ModalTwo from "./components/ModalTwo";

export default function Home() {
  const { isModalOneOpen, isModalTwoOpen } = useContext(StateContext)!;

  return (
    <main className="w-full min-h-[750px] grid grid-rows-[3fr,3fr,minmax(400px,auto),4fr,1fr] grid-cols-[auto]">
      <Header />
      <Nav />
      <Section />
      <Aside />
      <Footer />
      {isModalOneOpen && <ModalOne />}
      {isModalTwoOpen && <ModalTwo />}
    </main>
  );
}
