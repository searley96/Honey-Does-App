import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address,
        role: 'client'
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      {/* USERNAME INPUT */}
      {/* <div>
        <TextField size="small" label="username" value={username} required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div> */}
      
      

      {/* FIRST NAME INPUT */}
      <div>
        <TextField size="small" label="first name" value={firstName} required
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      {/* LAST NAME INPUT */}
      <div>
        <TextField size="small" label="last name" value={lastName} required
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      {/* EMAIL INPUT */}
      <div>
        <TextField size="small" label="email" value={email} required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      {/* PASSWORD INPUT */}
      <div>
        <TextField size="small" label="password" value={password} required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      {/* PHONE NUMBER INPUT */}
      <div>
        <TextField size="small" label="phone number" value={phoneNumber} required
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>

      {/* ADDRESS INPUT */}
      <div>
        <TextField size="small" label="address" value={address} required
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>

      
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
