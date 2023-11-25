import React, { useState } from "react";
import Button from './Button.jsx'
import Display from './Display.jsx'


export default function Panel() {
  const [currentValue, setCurrentValue] = useState(0)
  function updateDisplay(value) {
    setCurrentValue(value)
  }
    return (
      <>
        <br></br>
        <div class="cal-skeleton">
          <Display value={currentValue} />
          <Button returnResult={(value)=>updateDisplay(value)}/>
        </div>
      </>
    );
  }