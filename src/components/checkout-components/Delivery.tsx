import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import { render } from "@testing-library/react";
import { Alert, FormGroup, Label, InputGroup, Button} from "@blueprintjs/core";



let selectedOption: number;


export default function Delivery() {
    
    function handleOptionChange(changeEvent:any) {

        setSelectedOption(changeEvent.target.value);
        
    }
    const [selectedOption, setSelectedOption] = useState("");

    

  return (

    <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={selectedOption === "option1"} onChange={handleOptionChange} />
            <h3>PostNord </h3>
            <p>49 kr och 6 arbets dagar</p>
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" checked={selectedOption === "option2"} onChange={handleOptionChange}/>
            <h3>DHL </h3>
            <p>69 kr och 5 arbets dagar</p>
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" checked={selectedOption ==="option3"} onChange={handleOptionChange}/>
            <h3>Express </h3>
            <p>99 kr och 3 arbets dagar</p>
          </label>
        </div>
      </form>
    
 /*    <form>
        <Radio label="PostNord" value="one" defaultChecked={true}/>
        <Radio label="DHL" value="two" />
        <Radio label="Express" value="three" />
    </form> */
  );
}

