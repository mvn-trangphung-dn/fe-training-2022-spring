import React, { useState, useEffect } from 'react';

function Count({count = {}}) {
  const {num, size} = count;
  const [isCount, setIsCount] = useState(false);
  const [counter, setCounter] = useState(num);
  let [counterIntervalId, setCounterIntervalId] = useState(null)
  const toggleCountDown = (value) => {
    setIsCount(value);
    if (isCount && counter > 0) {
      if (counterIntervalId) clearCountdown();
      setCounterIntervalId(
        counterIntervalId = setInterval(() => {
        setCounter(counter => {
          if (counter > 0) {
            return counter - 1;
          } else {
            clearCountdown();
            return 0
          }
        });
      }, 1000));
    } else {
      clearCountdown();
    }
  }

  const clearCountdown = () => {
    clearInterval(counterIntervalId);
    setCounterIntervalId(null);
  }

  useEffect(() => {
    toggleCountDown(isCount);
    setCounterIntervalId(counterIntervalId);
  }, [isCount]);


  return (
    <div className="clock">
      {!!isCount ? (
        <button className="actionBtn" onClick={(e) => toggleCountDown(false)}>
          <i className="fa-solid fa-pause"></i> Stop
        </button>) :
      (<button className="actionBtn" onClick={(e) => toggleCountDown(true)}>
          <i className="fa-solid fa-play"></i> Start
        </button>)
      }
      <div className="circle" style={{"height": size, "width": size}}>
        <span className="counter">{counter}</span>
      </div>
    </div>
  )
}

export default Count;
