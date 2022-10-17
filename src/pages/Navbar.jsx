import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, width: '100vw', height: '100%' }}>
      <AppBar
        sx={{
          width: '100vw',
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {' '}
          <Box>
            <IconButton
              size="xlarge"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 'auto',
              gap: '1rem',
            }}
          >
            <Typography
              component={motion.div}
              whileHover={{
                //make text shine on hover
                textShadow: '0px 0px 8px rgb(255,255,255)',

                scale: 1.1,
              }}
              variant="
          p
          "
              sx={{ flexGrow: 1 }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                to="/"
              >
                Home
              </Link>
            </Typography>
            <Typography
              component={motion.div}
              whileHover={{
                //make text shine on hover
                textShadow: '0px 0px 8px rgb(255,255,255)',

                scale: 1.1,
              }}
              variant="p"
              sx={{ flexGrow: 1 }}
            >
              <Link
                //shine on hover

                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                to="/about"
              >
                About
              </Link>
            </Typography>
            <Typography
              component={motion.div}
              whileHover={{
                //make text shine on hover
                textShadow: '0px 0px 8px rgb(255,255,255)',

                scale: 1.1,
              }}
              variant="p"
              sx={{ flexGrow: 1 }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                to="/datas"
              >
                Data
              </Link>
            </Typography>

            <Typography
              component={motion.div}
              whileHover={{
                //make text shine on hover
                textShadow: '0px 0px 8px rgb(255,255,255)',

                scale: 1.1,
              }}
              variant="p"
              sx={{ flexGrow: 1 }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                to="/signUp"
              >
                Sign up
              </Link>
            </Typography>

            <Button
              component={motion.div}
              whileHover={{
                //make text shine on hover
                textShadow: '0px 0px 8px rgb(255,255,255)',
                scale: 1.1,
              }}
              onClick={() => navigate('/login')}
              color="inherit"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
