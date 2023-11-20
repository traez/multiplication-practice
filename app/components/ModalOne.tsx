/*
the ModalOne component serves as an entry point for users to select a subscription plan, choose a billing date, and either proceed to the multiplication practice game or bypass the subscription-related choices and directly access the game. It encapsulates user interaction and decision-making within a modal interface, providing a pathway for users to engage with both the subscription aspect and the game functionality of the application. 
*/
"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function ModalOne() {
  const { toggleModalOne } = useContext(StateContext)!;
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSub, setSelectedSub] = useState("");

  const resetSelections = () => {
    setSelectedDate("");
    setSelectedSub("");
  };

  const handleSubscription = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSub(e.target.value);
  };

  const getNextBillingDates = (date: Date) => {
    const billingDates = [];
    for (let i = 30; i <= 34; i++) {
      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + i);
      billingDates.push(nextDate.toDateString());
    }
    return billingDates;
  };

  const nextBillingDates = getNextBillingDates(today);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[2] bg-black bg-opacity-50">
      <div className="fixed top-1/2 left-1/2 h-[25rem] w-[19rem] transform -translate-x-1/2 -translate-y-1/2 rounded p-2 z-[3] bg-traeGreen8 text-traeGreen10 grid grid-rows-[1fr,1fr,1fr] grid-cols-[auto] border-2 border-solid border-black">
        <section className=" text-[0.8rem] h-full flex flex-col justify-around items-center">
          <select
            className="h-[2rem] text-traeGreen4 bg-traeGreen10 font-bold rounded cursor-pointer border-2 border-solid border-traeGreen8"
            onChange={handleSubscription}
            value={selectedSub}
          >
            <option className="font-bold" value="">
              Support Smart Kids; Select a Donation Plan
            </option>
            <option className="font-bold" value="$29/month">
              $29/month
            </option>
            <option className="font-bold" value="$39/month">
              $39/month
            </option>
            <option className="font-bold" value="$59/month">
              $59/month
            </option>
          </select>

          <select
            onChange={handleSelectChange}
            value={selectedDate}
            className="h-[2rem] text-traeGreen4 bg-traeGreen10 font-bold rounded cursor-pointer border-2 border-solid border-traeGreen8"
          >
            <option value="" className="font-bold">
              Choose your next Monthly Billing Date
            </option>
            {nextBillingDates.map((day, index) => (
              <option key={index} value={day} className="font-bold">
                {day}
              </option>
            ))}
          </select>
        </section>

        <section>
          {selectedDate && selectedSub ? (
            <div className="h-full flex flex-col justify-around items-center">
              <p>Your Donation Plan costs {selectedSub}</p>
              <p>
                Next Monthly Billing: {new Date(selectedDate).toDateString()}
              </p>
            </div>
          ) : (
            <div className="relative h-full w-full">
              <Image
                src="/images/icon-multiplication.jpg"
                alt=""
                fill
                sizes="(min-width: 400px) 100vw"
              />
            </div>
          )}
        </section>

        <section className="flex flex-col justify-center items-center text-[1.2rem]">
          {selectedDate && selectedSub ? (
            <button
              className="h-[4rem] text-traeGreen10 bg-traeGreen4 font-bold rounded cursor-pointer border-2 border-solid border-black hover:text-traeGreen4 hover:bg-traeGreen10 px-2"
              onClick={() => {
                toggleModalOne();
                resetSelections();
              }}
            >
              Start Game!
            </button>
          ) : (
            <button
              className="h-[4rem] text-traeGreen10 bg-traeGreen4 font-bold rounded cursor-pointer border-2 border-solid border-black hover:text-traeGreen4 hover:bg-traeGreen10 px-2"
              onClick={() => {
                toggleModalOne();
                resetSelections();
              }}
            >
              Ignore/Go Straight to Game!
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
