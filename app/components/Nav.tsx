/*
the Nav component provides a visual representation of the current multiplication equation and the user's selected answer within the game. It dynamically updates the display based on game state changes, including the opponent's turn, user-selected answers, and correctness feedback for the user's answers, enhancing the user's interaction and feedback during the multiplication practice game.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Nav() {
  const { gameState, selectedAnswer } = useContext(StateContext)!;

  const listItems = [`${gameState.num1}`, "X", `${gameState.num2}`, "="];

  const renderSelectedItem = () => {
    if (!gameState.isTurn && selectedAnswer) {
      return selectedAnswer;
    }
    return "?";
  };

  const lastItem = renderSelectedItem() || "?";

  const selectedAnswerAsNumber = Number(selectedAnswer);
  const isAnswerCorrect = selectedAnswerAsNumber === gameState.correctAnswer;

  return (
    <nav className="p-2 bg-traeGreen5 flex flex-row justify-center items-center">
      <menu className="w-full flex flex-row justify-center items-center gap-2">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="h-[4rem] w-[3rem] border-2 border-solid border-traeGreen8 flex flex-col justify-center items-center text-[1.5rem] rounded even:bg-traeGreen6 odd:bg-traeGreen2 odd:text-traeGreen10 even:text-traeGreen4"
          >
            {item}
          </li>
        ))}
        <li
          className={`h-[4rem] w-[3rem] border-2 border-solid border-traeGreen8 flex flex-col justify-center items-center text-[1.5rem] rounded ${
            lastItem === "?"
              ? "bg-traeGreen2 text-traeGreen10"
              : isAnswerCorrect
              ? "bg-blue-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {lastItem}
        </li>
      </menu>
    </nav>
  );
}
