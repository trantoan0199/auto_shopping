import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    maxWidth: "100%",
    minHeight: "100vh",
    justifyContent: "center",
    display: "flex",
    backgroundImage: `URL(https://images.designtrends.com/wp-content/uploads/2015/11/25101801/Car-Background-Designs3.jpg)`,
  },
});

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onClickLogin = () => {
    if (username === "admin" && password === "123456") {
      navigate("/admin");
    }
  };

  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <div className={classes.container}>
        <Box sx={{ display: "block" }}>
          <div>
            <Typography variant="h3">Admin Login</Typography>
            <FormControl sx={{ m: 1, width: "75%" }} variant="outlined">
              <InputLabel>User Name</InputLabel>
              <OutlinedInput
                value={username}
                onChange={(e) => handleChangeUser(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton disabled edge="end">
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
                type={showPassword ? "text" : "password"}
                value={password.password}
                onChange={(e) => handleChangePassword(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              size="medium"
              onClick={onClickLogin}
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
