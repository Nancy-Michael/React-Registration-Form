
import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errormessege: "username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errormessege: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errormessege: "Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character!",
      required: true,
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      pattern: values.password,
      errormessege: "Password don't match!",
      required: true,
    },
  ]
  const handelSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input) => (
            <FormInput
              key={input.id} {...input}
              value={values[input.name]}
              onChange={onChange} />
          ))
        }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
