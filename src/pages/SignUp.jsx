import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
// import signup from '../assets/signup.svg';
// import pink from '../assets/pink.svg';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';

const SignUp = ({ user, setUser, userList, setUserList }) => {
  const [newUser, setNewUser] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const formikA = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (event, values) => {
      setNewUser({
        email: formikA.values.email,
        password: formikA.values.password,
      });

      event.preventDefault();

      const addedUser = {};
    },
  });

  console.log(newUser);

  return (
    <Paper
      sx={{
        display: 'flex',
        mt: '3%',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
      }}
      elevation={6}
    >
      <Box
        sx={{
          height: {
            xs: '30%',
            sm: '35%',
          },
          width: '100%',
          //background loinear gradient with pink and purple
          backgroundImage:
            'url( https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=600 )',
          backgroundSize: 'cover',
          //dartken the background
          backgroundColor: 'rgba(0,0,0,0.5)',
          backgroundBlendMode: 'darken',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '3rem',
              },
              color: 'white',
              fontWeight: 'bold',
              zIndex: '10',
            }}
          >
            Signup and receive <br /> updated Statistics
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: {
            xs: '80%',
            sm: '70%',
          },
          width: '100%',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
          }}
        >
          <form
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
              width: '80%',
            }}
            onSubmit={formikA.handleSubmit}
          >
            {' '}
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3rem',
                },
                color: 'secondary.main',
                fontWeight: 'bold',
                textAlign: 'center',
                position: 'relative',
                mb: '1rem',
                width: '100%',
                textTransform: 'uppercase',
              }}
            >
              Sign Up
            </Typography>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formikA.values.email}
              onChange={formikA.handleChange}
              fullWidth
              sx={{
                mt: '3%',
                mb: '3%',
              }}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              value={formikA.values.password}
              onChange={formikA.handleChange}
              fullWidth
              sx={{
                mt: '3%',
                mb: '3%',
              }}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              value={formikA.values.confirmPassword}
              onChange={formikA.handleChange}
              fullWidth
              sx={{
                mt: '3%',
                mb: '3%',
              }}
            />
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: '3%', mb: '3%' }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
        <Box
          sx={{
            height: '100%',
            width: '100%',

            backgroundImage:
              'url(https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600)',
            backgroundSize: 'cover',
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}
        ></Box>
      </Box>
    </Paper>
  );
};

export default SignUp;
