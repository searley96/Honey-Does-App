import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (email && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: email,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        marginTop: 5,
        backgroundColor: "whitesmoke",
        boxShadow: 14,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            py: "20px",
            fontWeight: "bold",
          }}
          gutterBottom
          variant="h5"
        >
          Login
        </Typography>
        {errors.loginMessage && (
          <Typography variant="h6" color="error" gutterBottom>
            {errors.loginMessage}
          </Typography>
        )}
        <form onSubmit={login}>
          {/* <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div> */}
          {/* EMAIL INPUT */}
          <div>
            <TextField
              sx={{
                outline: "none",
                "&:focus": {
                  outlineWidth: "1px",
                  outlineStyle: "solid",
                  outlineColor: "#1976D2",
                },
              }}
              variant="outlined"
              fullWidth
              size="small"
              label="Email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {/* <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div> */}
          {/* PASSWORD INPUT */}
          <div style={{ marginTop: 16 }}>
            <TextField
              fullWidth
              size="small"
              label="Password"
              value={password}
              required
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div style={{ marginTop: 16, textAlign: "center", boxShadow: 24 }}>
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
