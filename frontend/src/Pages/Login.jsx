import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Divider,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  mainContainerStyles,
  paperStyles,
  headingStyles,
  subHeadingStyles,
  loginBtnStyles,
  socialIconStyles,
  googleIconStyles,
  twitterIconStyles,
  dividerLineStyles
} from "../styles/Login.style";
import { BASE_URL } from '../api';
import { IoIosMail } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FaGithubSquare, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Login() {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // method Login
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/signin`, data);
      const { accessToken, user } = res.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", accessToken);

      toast.success("Login Successfully!!");
      navigate("/Home");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Login failed, please try again"
      );
    }
  };

  return (
    <Box sx={ {...mainContainerStyles,alignItems:'center'}}>
      <Paper elevation={6} sx={paperStyles}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={headingStyles}>
          Welcome Back
        </Typography>

        <Typography
          variant="body2"
          sx={subHeadingStyles}>
          Please login to your account
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            placeholder="test@gmail.com"
            {...register("email", {
              required: "Email is required!!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoIosMail size={20} color="#606366" />
                </InputAdornment>
              ),
            }}
          />

          {/* Password*/}
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            margin="normal"
            placeholder="test123"
            {...register("password", {
              required: "Password is required!!",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TbLockPassword size={20} color="#606366" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePassword}>
                    {showPassword ? (
                      <LuEye size={20} color="#606366" />
                    ) : (
                      <LuEyeClosed size={20} color="#606366" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={loginBtnStyles}>
            Login
          </Button>
        </form>

        <Divider sx={dividerLineStyles}>
          <Typography>or</Typography>
        </Divider>

        <Stack direction="row" spacing={3} justifyContent="center">
          <IconButton
            size="large"
            sx={socialIconStyles}>
            <FaGithubSquare size={30} />
          </IconButton>

          <IconButton
            size="large"
            sx={googleIconStyles}>
            <FcGoogle size={30} />
          </IconButton>

          <IconButton
            size="large"
            sx={twitterIconStyles}>
            <FaTwitter size={30} />
          </IconButton>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
          spacing={0.7}>
          <Typography variant="body2">Don't have an Account ?</Typography>
          <Link to="/Register">
            <Typography variant="body1" fontWeight={600} color="primary">
              Sign up
            </Typography>
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
}
