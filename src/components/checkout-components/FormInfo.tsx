import React from "react";
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import { render } from "@testing-library/react";
import { Alert, FormGroup, Label, InputGroup } from "@blueprintjs/core";

type FormData = {
  firstName: string;
  lastName: string;
  phone: number;
  adress: string;
};

const success = () => {
  const form = document.getElementById('infos-form')
  render(
    <div style={{ textAlign: 'center' }}>
      <h2>Message from the team:</h2>
      <p>We received your info, thank you!</p>
      <p style={{ color: 'red' }}>Till min grupp: Detta behöver vi fixa, det ska inte vara här :D</p>
    </div>
  )
}

export default function InfoForm() {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName, phone, adress }) => {
  });

  return (
    <form id="infos-form" onSubmit={onSubmit}>
      <Label className="bp3-fill">First Name:</Label>
      <InputGroup className="bp3-fill" name="firstName" ref={register} /> <br />
      <Label className="bp3-fill">Last Name:</Label>
      <InputGroup className="bp3-fill" name="lastName" ref={register} /> <br />
      <Label className="bp3-fill">Phone number:</Label>
      <InputGroup className="bp3-fill" name="phone" ref={register} /> <br />
      <Label className="bp3-fill">Address:</Label>
      <InputGroup className="bp3-fill" name="address" ref={register} /> <br />
      <button style={buttonStyle}
        type="button"
        onClick={() => {
          setValue("lastName", "");
          setValue("firstName", "");
          setValue("phone", 0);
          setValue("adress", "");
          success()
        }}
      >
        Save
      </button>
    </form>
  );
}

const buttonStyle: React.CSSProperties = {
  width: '100%',
  border: '1px, grey'


}