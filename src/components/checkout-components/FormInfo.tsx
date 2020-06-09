import React from "react";
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'
import { render } from "@testing-library/react";
import { Alert, FormGroup } from "@blueprintjs/core";

type FormData = {
  firstName: string;
  lastName: string;
  phone: number;
  adress: string;
};

const success = () => {
    render(
        <div>
            Your data has been received!
        </div>
    )
} 

export default function InfoForm() {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName, phone, adress }) => {
    console.log(firstName, lastName, phone, adress);
  }); 

  return (
    <form id="infos-form" onSubmit={onSubmit}>
      <label>First Name</label>
      <input name="firstName" ref={register} /> <br/>
      <label>Last Name</label>
      <input name="lastName" ref={register} /> <br/>
      <label>Phone</label>
      <input name="phone" ref={register} /> <br/>
      <label>Adress</label>
      <input name="adress" ref={register} /> <br/>
      <button
        type="button"
        onClick={() => {
          setValue("lastName", ""); 
          setValue("firstName", ""); 
          setValue("phone", 0 );
          setValue("adress", "");
          success()
        }}
      >
        Save
      </button>
    </form>
  );
}