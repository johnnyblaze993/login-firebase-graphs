import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
// import signup from '../assets/signup.svg';
// import pink from '../assets/pink.svg';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { pink } from '@mui/material/colors';

const SignUp = ({ user, setUser, userList, setUserList }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (event, values) => {
      formik.resetForm();
      setUser({
        email: formik.values.email,
        password: formik.values.password,
      });
      event.preventDefault();
    },
  });

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
            'url( https://images.pexels.com/photos/4050387/pexels-photo-4050387.jpeg?auto=compress&cs=tinysrgb&w=600)',

          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          //repeate none
          backgroundRepeat: 'no-repeat',
          //dartken the background
          backgroundColor: 'rgba(0,0,0,0.3)',
          backgroundBlendMode: 'darken',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '3%',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '3rem',
              },
              color: 'white',
              fontWeight: 'bold',
              position: 'relative',
            }}
          >
            Stay updated <br /> from anywhere
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

            backgroundImage:
              'url(https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Box>
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
            onSubmit={formik.handleSubmit}
          >
            {' '}
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3rem',
                },
                color: pink[500],
                fontWeight: 'bold',
                textAlign: 'center',
                position: 'relative',
                mb: '1rem',
                width: '100%',
                textTransform: 'uppercase',
              }}
            >
              Login
            </Typography>
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
              value={formik.values.password}
              onChange={formik.handleChange}
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
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              fullWidth
              sx={{
                mt: '3%',
                mb: '3%',
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: '3%', mb: '3%', backgroundColor: pink[500] }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};

export default SignUp;
