import React from "react";
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import { render } from "@testing-library/react";
import { Alert, FormGroup, Label, InputGroup, Button } from "@blueprintjs/core";

type FormData = {
  firstName: string;
  lastName: string;
  phone: number;
  adress: string;
};


const okMessage = 
  (
    <div style={{ textAlign: 'center' }}>
    <h2>Message from the team:</h2>
    <p>We received your info, thank you!</p>
  </div>
  )


const success = () => {
  const form = document.getElementById('message')
  ReactDOM.render(okMessage, form);
}

export default function InfoForm() {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit((values) => {
    console.log('SUBMIT:', values);
  });
  const printinfo = () => {

  }

  const errMsg = <div style={{color: 'red', marginBottom: '10px'}}>* Please, fill in the form correctly.</div>
  const errPhone = <div style={{color: 'red', marginBottom: '10px'}}>* You exceeded the max number of permitted characters</div>
  
  return (
    
    <form id="infos-form" onSubmit={onSubmit} autoComplete="on">
      <Label className="bp3-fill">* Name:</Label>
      <input style={inputStyle} className="bp3-fill" name="firstName" ref={register({
        required: true,
        pattern: {
          value: /[a-z]\w+/,
          message: "Please enter a valid name"
        }
      }) as any} /> <br />
      {errors.firstName && errMsg }

      <Label className="bp3-fill">* Email:</Label>

      <input style={inputStyle} className="bp3-fill" name="lastName" ref={register({
        required: true,
        pattern: {
          value: /[a-z]\w+/,
          message: "Please enter a valid name"
        }
      }) as any} /> <br />
      {errors.lastName && errMsg }

      <Label className="bp3-fill">Phone number:</Label>

      <input style={inputStyle} className="bp3-fill" name="phone" type="number"
      ref={register({
        required: false
      }) as any} /> <br />
      

      <Label className="bp3-fill">* Address:</Label>

            <input style={inputStyle} className="bp3-fill" name="adress" ref={register({
        required: true,
        pattern: {
          value: /[a-z]\w+/,
          message: "Please enter a valid name"
        }
      }) as any} /> <br />
      {errors.adress && errMsg }

      <Button onClick={onSubmit} type="submit" style={buttonStyle}>
        Save
      </Button>
    </form>
  );
}



const buttonStyle: React.CSSProperties = {
  width: '100%',
  border: '1px, grey'
};

const inputStyle: React.CSSProperties = {
    border: '1px #ccc5b9 solid',
    position: 'relative',
    width: '100%',
    height: '30%',
    marginBottom: '10px'
}
