/*
the Section component provides a user interface for displaying and selecting answer choices during the multiplication practice game. It facilitates user interaction by presenting multiple answer options and enabling users to select an answer based on the current game state. This component contributes to the overall user experience by allowing users to engage with and respond to the presented multiplication questions.
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function Section() {
  const {
    gameState: { choices, correctAnswer, score },
    selectedAnswer,
    labelsDisabled,
    handleAnswerSelect,
  } = useContext(StateContext)!;

  return (
    <section className="p-2 bg-traeGreen5 grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 w-full justify-items-center">
      {choices.map((ans, index) => (
        <label
          key={index}
          className="h-[8rem] w-[8rem] border-4 border-solid border-traeGreen4 flex flex-col justify-center items-center text-[2rem] rounded cursor-pointer bg-traeGreen8 hover:bg-traeGreen1 text-traeGreen10 hover:text-traeGreen4"
        >
          {ans}
          <input
            type="radio"
            name="answer"
            value={ans}
            checked={selectedAnswer === String(ans)}
            onChange={handleAnswerSelect}
            disabled={labelsDisabled}
            className="" //hidden
          />
        </label>
      ))}
    </section>
  );
}
