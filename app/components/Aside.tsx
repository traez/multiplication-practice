/*
the Aside component acts as a visual representation of the user's score and progress within the multiplication practice game. It plays an essential role in providing continuous feedback to the user about their performance, enhancing the overall user experience during the game.
*/
"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Aside() {
  const { gameState } = useContext(StateContext)!;

  const scores = [`${gameState.score}`, "/", `${gameState.question}`];

  return (
    <aside className="p-2 bg-traeGreen5 flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-center items-center gap-1 border-4 border-solid border-traeGreen4 rounded h-[6rem] bg-traeGreen8 text-[2.5rem]">
        <b className="h-[4rem] px-3 border-2 border-solid border-traeGreen5 flex flex-col justify-center items-center bg-traeGreen2 rounded text-traeGreen10">
          Score:
        </b>
        <menu className="flex flex-row justify-center items-center">
          {scores.map((score, index) => (
            <li
              key={index}
              className="h-[4rem] px-1 border-2 border-solid border-traeGreen5 flex flex-col justify-center items-center bg-traeGreen6 rounded odd:bg-traeGreen2 odd:text-traeGreen10 even:text-traeGreen4"
            >
              {score}
            </li>
          ))}
        </menu>
      </div>
    </aside>
  );
}
