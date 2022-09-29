
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import AsideContainer from './components/AsideContainer/AsideContainer';
import { useState } from 'react';

function App() {
  // const times = [{ parameter: "Exercise Time", time: 0 }, { parameter: "Break Time", time: 0 }]

  //EXERCISE TIME STATE
  const [exerciseTime, setExerciseTime] = useState(0)
  const counter = (duration) => {
    setExerciseTime(exerciseTime + parseInt(duration));
  }

  //BREAK TIME STATE
  // const initialBreakTime = parseInt(localStorage.getItem('breakTime'));
  const initialBreakTime = localStorage.getItem('breakTime') ? parseInt(localStorage.getItem('breakTime')) : 0;

  const [breakTime, setBreakTime] = useState(initialBreakTime);
  const breakBtn = (time) => {
    setBreakTime(time)
    localStorage.setItem('breakTime', time)
  }

  return (
    <div className="App">
      <MainContainer counter={counter}></MainContainer>
      <AsideContainer exerciseTime={exerciseTime} breakBtn={breakBtn} breakTime={breakTime}></AsideContainer>

    </div>
  );
}

export default App;
