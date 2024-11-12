import React from 'react';
import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import CounterWithReducer from './components/CounterWithReducer';
import EffectComponent from './components/EffectComponent';
import { UserProvider } from './contexts/UserContext';
import UserProfile from './components/UserProfile';
import InputFocus from './components/InputFocus';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Card title="Reusable Component" content="This is a card component using props." />
        <Counter />
        <CounterWithReducer />
        <EffectComponent />
        <UserProfile />
        <InputFocus />
      </div>
    </UserProvider>
  );
}

export default App;
