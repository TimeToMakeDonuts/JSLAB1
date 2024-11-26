import React from "react";
import Card from "./Card";
import Counter from "./Counter";
import CounterWithReducer from "./CounterWithReducer";
import EffectComponent from "./EffectComponent";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";
import InputFocus from "./InputFocus";

const Lab7 = () => {
  return (
    <UserProvider>
      <div className="lab-container">
        <h1>Lab 7 - Komponenty</h1>
        <Card title="Reusable Component" content="This is a card component using props." />
        <Counter />
        <CounterWithReducer />
        <EffectComponent />
        <UserProfile />
        <InputFocus />
      </div>
    </UserProvider>
  );
};

export default Lab7;
