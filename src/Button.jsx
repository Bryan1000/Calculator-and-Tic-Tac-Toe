import React, { useState } from "react";


function result(value) {
    let displayOutput = value
      
      
      let operations = displayOutput.split(/([\+\-\*\/])/);

      
      let last = displayOutput.substring(displayOutput.length - 1)

      
      if (['+', '-', '*', '/'].includes(last)) {
        
        operations.pop();
      }

      
      let result = parseFloat(operations[0]);
      for (var i = 1; i < operations.length; i += 2) {
        let operator = operations[i]
        let operand = parseFloat(operations[i + 1])

        switch (operator) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          case '*':
            result *= operand;
            break;
          case '/':
            if (operand !== 0) {
              result /= operand;
            } else {
              alert('Error')
              return
            }
            break
        }
      }
      return result
}

export default function Buttons(props) {
  const [userInput, setUserInput] = useState('')
  function output(event)
  {
    const nums = event.target.innerText;
  
    if(nums === '=')
      setUserInput(result(userInput))
    else if(nums === 'C')
      setUserInput('0')
    else
      setUserInput(userInput+nums)
  
    props.returnResult(userInput)
  }
    return (
      <>
        <div class="cal-buttons">
          <button type="button" class="cal-buttons" id="nums" onClick={output}>7</button>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>8</button>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>9</button>
          <button type="button" class="cal-buttons" id="operations" onClick={output}>+</button>
          <br></br>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>4</button>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>5</button>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>6</button>
          <button type="button" class="cal-buttons" id="operations" onClick={output}>-</button>
          <br></br>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>1</button>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>2</button>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>3</button>
          <button type="button" class="cal-buttons" id="operations" onClick={output}>x</button> 
          <br></br>
          <button type="button" class="cal-buttons" id="clear" onClick={output}>C</button>
          <button type="button" class="cal-buttons" id="nums" onClick={output}>0</button>
          <button type="button" class="cal-buttons" id="operations" onClick={output}>=</button>
          <button type="button" class="cal-buttons" id="operations" onClick={output}>/</button>
                
        </div>

      </>
    );
  }