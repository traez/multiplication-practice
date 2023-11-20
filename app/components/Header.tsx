/*
the Header component acts as an interactive section that facilitates game initialization, allows users to select multiplication ranges, and controls the flow of the game based on the global state managed by the StateProvider component. It encapsulates game control functionalities and presents them within the header section of the application.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Header() {
  const {
    gameState,
    setRangeEnd,
    toggleGameActive,
    generateQuestion,
    setLabelsDisabled,
    toggleIsTurn,
    setGameState,
    setSelectedAnswer, 
    selectedOption, 
    setSelectedOption, 
  } = useContext(StateContext)!;

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRange = parseInt(event.target.value, 10) as 0 | 7 | 14 | 20;
    setRangeEnd(selectedRange);
    setSelectedOption(event.target.value);
  };

  const startGame = () => {
    if (
      gameState.rangeEnd === 7 ||
      gameState.rangeEnd === 14 ||
      gameState.rangeEnd === 20
    ) {
      toggleGameActive();
      toggleIsTurn();
      generateQuestion();
      setLabelsDisabled(false);
      setGameState((prevState) => ({
        ...prevState,
        question: prevState.question + 1,
      }));
    }
  };

  const nextTurn = () => {
    if (!gameState.isTurn) {
      toggleIsTurn();
      generateQuestion();
      setSelectedAnswer('');
      setLabelsDisabled(false);
      setGameState((prevState) => ({
        ...prevState,
        question: prevState.question + 1,
      }));
    }
  };

  return (
    <header className="p-2 flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-8 border-b-2 border-traeGreen4 border-solid">
      <select
        className="h-[3rem] text-traeGreen4 bg-traeGreen10 font-bold rounded cursor-pointer border-2 border-solid border-traeGreen8"
        onChange={handleSelection}
        value={selectedOption}
      >
        <option className="font-bold" value="0">
          Select Multiplication Range
        </option>
        <option className="font-bold" value="7">
          1 - 7
        </option>
        <option className="font-bold" value="14">
          1 - 14
        </option>
        <option className="font-bold" value="20">
          1 - 20
        </option>
      </select>
      <button
        type="button"
        onClick={gameState.gameActive ? nextTurn : startGame}
        className="text-traeGreen4 text-[1.5rem] font-bold bg-traeGreen9 border-2 border-solid border-traeGreen8 hover:bg-traeGreen1 rounded-lg p-1 text-center inline-flex items-center"
      >
        <div className="relative h-[2.5rem] w-[2.5rem]">
          <Image
            src="/images/icon-play.png"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        {gameState.gameActive ? "Next" : "Start"}
      </button>
    </header>
  );
}


