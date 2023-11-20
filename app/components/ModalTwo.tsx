/*
the ModalTwo component encapsulates the end-of-game functionality, displaying the final score and offering users the option to restart the multiplication practice game. It serves as an integral part of the user experience, providing closure to the game session and a seamless way to begin a new game, contributing significantly to the interactive nature of the application.
*/
"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function ModalTwo() {
  const {
    toggleModalTwo,
    gameState,
    toggleModalOne,
    setSelectedAnswer,
    setGameState,
    setSelectedOption,
  } = useContext(StateContext)!;

  const handlePlayAgain = () => {
    toggleModalTwo();
    setSelectedAnswer(""); 
    setSelectedOption("");
    setGameState((prev) => ({
      ...prev,
      rangeEnd: 0,
      num1: 0,
      num2: 0,
      correctAnswer: 0,
      choices: [0, 0, 0, 0, 0],
      score: 0,
      question: 0,
      gameActive: false,
      isTurn: false,
    }));
    toggleModalOne();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[2] bg-black bg-opacity-50">
      <div className="fixed top-1/2 left-1/2 h-[25rem] w-[19rem] transform -translate-x-1/2 -translate-y-1/2 rounded p-2 z-[3] bg-traeGreen8 text-traeGreen10 grid grid-rows-[1fr,1fr,1fr] grid-cols-[auto] border-2 border-solid border-black">
        <section className="flex flex-col justify-center items-center text-[2rem]">
          <button className="h-[4rem] text-traeGreen10 bg-red-500 font-bold rounded border-2 border-solid border-black px-2">
            Game Over!
          </button>
        </section>

        <section className="flex flex-col justify-center items-center text-[2rem]">
          <button className="h-[4rem] text-traeGreen10 bg-blue-500 font-bold rounded border-2 border-solid border-black px-2">
            <span>Score:</span>
            <span>&nbsp;</span>
            <span>{gameState.score}</span>
            <span>/</span>
            <span>10</span>
          </button>
        </section>

        <section className="flex flex-col justify-center items-center text-[2.5rem]">
          <button
            className="h-[4rem] text-traeGreen10 bg-traeGreen4 font-bold rounded cursor-pointer border-2 border-solid border-black hover:text-traeGreen4 hover:bg-traeGreen10 px-2"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </section>
      </div>
    </div>
  );
}
