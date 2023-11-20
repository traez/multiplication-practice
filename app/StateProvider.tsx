/*
The StateProvider component acts as a central hub for managing various application states and functions, making them accessible throughout the application via the StateContext. Other components can consume and interact with these shared states and functions by accessing the StateContext using React's useContext hook or by wrapping their components with the StateContext.Consumer. This architecture promotes a cleaner and more organized way of managing state and logic across different parts of a React application.
*/
"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateContextType {
  isModalOneOpen: boolean;
  isModalTwoOpen: boolean;
  setIsModalOneOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalTwoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModalOne: () => void;
  toggleModalTwo: () => void;
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setRangeEnd: (value: 0 | 7 | 14 | 20) => void;
  toggleGameActive: () => void;
  generateQuestion: () => void;
  selectedAnswer: string; 
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>; 
  labelsDisabled: boolean; 
  setLabelsDisabled: React.Dispatch<React.SetStateAction<boolean>>; 
  handleAnswerSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleIsTurn: () => void;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

interface GameState {
  rangeEnd: 0 | 7 | 14 | 20;
  num1: number;
  num2: number;
  correctAnswer: number;
  choices: number[];
  score: number;
  question: number;
  gameActive: boolean;
  isTurn: boolean; 
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [isModalOneOpen, setIsModalOneOpen] = useState(true);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [labelsDisabled, setLabelsDisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [gameState, setGameState] = useState<GameState>({
    rangeEnd: 0,
    num1: 0,
    num2: 0,
    correctAnswer: 0,
    choices: [0,0,0,0,0],
    score: 0,
    question: 0,
    gameActive: false,
    isTurn: false,
  });

  const toggleModalOne = () => {
    setIsModalOneOpen((prev) => !prev);
  };

  const toggleModalTwo = () => {
    setIsModalTwoOpen((prev) => !prev);
  };

  const setRangeEnd = (value: 0 | 7 | 14 | 20) => {
    setGameState((prev) => ({ ...prev, rangeEnd: value }));
  };

  const toggleGameActive = () => {
    setGameState((prev) => ({ ...prev, gameActive: !prev.gameActive }));
  };

  function generateQuestion() {
    const newNum1 = Math.floor(Math.random() * gameState.rangeEnd) + 1;
    const newNum2 = Math.floor(Math.random() * gameState.rangeEnd) + 1;
    const newCorrectAnswer = newNum1 * newNum2;

    const newChoices: number[] = [];
    while (newChoices.length < 4) {
      const offset = Math.floor(Math.random() * 9) - 4;
      const wrongAnswer = newCorrectAnswer + offset;

      if (
        wrongAnswer !== newCorrectAnswer &&
        !newChoices.includes(wrongAnswer)
      ) {
        newChoices.push(wrongAnswer);
      }
    }

    newChoices.push(newCorrectAnswer);
    newChoices.sort(() => Math.random() - 0.5);

    setGameState((prev) => ({
      ...prev,
      num1: newNum1,
      num2: newNum2,
      correctAnswer: newCorrectAnswer,
      choices: newChoices,
    }));
  }

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedAnswer(selectedValue);
    setLabelsDisabled(true);
    toggleIsTurn();

    if (parseInt(selectedValue) === gameState.correctAnswer) {
      setGameState((prev) => ({
        ...prev,
        score: prev.score + 1, 
      }));
    }

    if (gameState.question === 10) {
      toggleModalTwo();
    }
  };
  
  const toggleIsTurn = () => {
    setGameState((prev) => ({
      ...prev,
      isTurn: !prev.isTurn, 
    }));
  };

  return (
    <StateContext.Provider
      value={{
        isModalOneOpen,
        isModalTwoOpen,
        setIsModalOneOpen,
        setIsModalTwoOpen,
        toggleModalOne,
        toggleModalTwo,
        gameState,
        setGameState,
        setRangeEnd,
        toggleGameActive,
        generateQuestion,
        selectedAnswer, 
        setSelectedAnswer, 
        labelsDisabled, 
        setLabelsDisabled, 
        handleAnswerSelect, 
        toggleIsTurn,
        selectedOption, 
        setSelectedOption, 
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
