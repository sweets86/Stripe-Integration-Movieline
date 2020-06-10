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
    console.log('SUBMIT:', values)
  });

  console.log({ errors })

  return (
    <form id="infos-form" onSubmit={onSubmit} autoComplete="on">
      <Label className="bp3-fill">First Name:</Label>
      <input className="bp3-fill" name="firstName" ref={register({
        required: true,
        pattern: {
          value: /[a-z]\w+/,
          message: "Please enter a valid name"
        }
      }) as any} /> <br />
      {errors.firstName?.message}

      <Label className="bp3-fill">Last Name:</Label>
      <InputGroup className="bp3-fill" name="lastName" ref={register} /> <br />
      <Label className="bp3-fill">Phone number:</Label>
      <InputGroup className="bp3-fill" name="phone" ref={register} /> <br />
      <Label className="bp3-fill">Address:</Label>
      <InputGroup className="bp3-fill" name="address" ref={register} /> <br />
      <Button type="submit" style={buttonStyle}>
        Save
      </Button>
    </form>
  );
}



const buttonStyle: React.CSSProperties = {
  width: '100%',
  border: '1px, grey'


}
