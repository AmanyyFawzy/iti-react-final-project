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
  headingStyles,
  paperStyles,
  subHeadingStyles,
  loginBtnStyles,
  socialIconStyles,
  googleIconStyles,
  twitterIconStyles,
  dividerLineStyles,
  RegisterPaperStyles
} from "../styles/Login.style";
import { BASE_URL } from '../api'
import { FaGithubSquare, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { PiUser } from "react-icons/pi";
import { TbLockPassword } from "react-icons/tb";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Register() {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  // method Register
  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${BASE_URL}/register`,
        {
          email: data.email,
          password: data.password,
          firstname: data.firstname,
          lastname: data.lastname,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Registration successful !!");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again later");
    }
  };

  return (
    <Box
      sx={mainContainerStyles}>
      <Paper 
        elevation={6}
        sx={{...paperStyles,...RegisterPaperStyles}}
      >

        {/* header*/}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={headingStyles}>
          Create Account
        </Typography>

        <Typography
          variant="body2"
          sx={subHeadingStyles}>
          Sign up to get started
        </Typography>

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <Stack direction="row" spacing={1} justifyContent="flex-start">
            {/* First Name */}
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="First Name"
                placeholder="ahmed"
                margin="normal"
                {...register("firstname", {
                  required: "First name is required!!",
                  minLength: {
                    value: 2,
                    message: "must be at least 2 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters allowed",
                  },
                })}
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <PiUser
                        size={20}
                        color="#606366"
                        style={{ marginRight: "10px" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Last Name */}
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Last Name"
                placeholder="ali"
                margin="normal"
                {...register("lastname", {
                  required: "Last name is required!!",
                  minLength: {
                    value: 2,
                    message: "must be at least 2 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters allowed",
                  },
                })}
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <PiUser
                        size={20}
                        color="#606366"
                        style={{ marginRight: "10px" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Stack>

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="test@gmail.com"
            margin="normal"
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
                <InputAdornment>
                  <IoIosMail
                    size={20}
                    color="#606366"
                    style={{ marginRight: "10px" }}
                  />
                </InputAdornment>
              ),
            }}
          />

          {/* Password*/}
          <TextField
            fullWidth
            label="Password"
            placeholder="test123"
            type={showPassword ? "text" : "password"}
            margin="normal"
            {...register("password", {
              required: "Password is required!!",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TbLockPassword size={20} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePassword}>
                    {showPassword ? <LuEye /> : <LuEyeClosed />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="test123"
            type={showConfirmPassword ? "text" : "password"}
            margin="normal"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords don't match!",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TbLockPassword size={20} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmPassword}>
                    {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Register Button */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={loginBtnStyles}>
            Register
          </Button>
        </form>

        {/* sign up with another ways */}
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

        {/* login navigate */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
          spacing={1}>
          <Typography variant="body2">Already have an account?</Typography>
          <Link to="/login">
            <Typography variant="body1" fontWeight={600} color="primary">
              Sign In
            </Typography>
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
}
