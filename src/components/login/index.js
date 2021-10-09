// import React, { useState } from 'react';
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const useStyles = makeStyles({
  container: {
    background: "#ffffff",
    width: "30%",
    height: 300,
    textAlign: "center",
    display: "inline-block",
    marginTop: 50,
  },
  box: {
    maxWidth: '100%',
    maxHeight: '1000',
    justifyContent: "center",
    display: 'flex',
    backgroundImage: `URL(https://images.designtrends.com/wp-content/uploads/2015/11/25101801/Car-Background-Designs3.jpg)`,
  },
});

export default function Login() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    // weight: "",
    // weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div className={classes.container}>
        <Box sx={{ display: "block" }}>
          <div>
            <Typography variant="h3">Admin Login</Typography>
            <FormControl sx={{ m: 1, width: "75%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-username">
                User Name
              </InputLabel>
              <OutlinedInput
                value={values.username}
                onChange={handleChange("username")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      // aria-label="password"
                      edge="end"
                    >
                      <AccountCircleIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "75%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                // id="outlined-adornment-password" Nhớ lịch sử đăng nhập
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              size="medium"
              sx={{
                display: "block",
                margin: "20px auto",
              }}
            >
              Log in
            </Button>
          </div>
        </Box>
      </div>
    </Box>
  );
}
