import * as React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '15px',
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const MyButton = () => {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="example-container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          animate={{
            rotate: rotate ? 360 : 0,
          }}
          onClick={() => setRotate(!rotate)}
        />
      </div>
      {/* <div
        style={{
          marginTop: '20%',
        }}
        className="example-container"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          animate={{
            x: move ? 200 : 0,
          }}
          transition={{
            type: 'tween',
            duration: 2,
            ease: 'easeInOut',
          }}
          onClick={() => setMove(!move)}
        />
      </div> */}
      <div
        style={{
          marginTop: '10%',
        }}
        className="example-container"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          animate={{
            x: move ? 200 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => setMove(!move)}
        />
      </div>
      {/* <div
        style={{
          marginTop: '20%',
        }}
        className="example-container"
      >
        <motion.div
          drag="x"
          dragConstraints={{
            left: 20,
            right: 20,
          }}
          whileDrag={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.8 }}
        />
      </div> */}
      {/* <div
        style={{
          marginTop: '20%',
        }}
        className="example-container"
      >
        <motion.div
          animate={{
            rotate: [0, 360, 0, 360, 0, 360, 0, 360, 0],
            // x: [0, 200, 0, 200, 0, 200, 0, 200, 0],
            // y: [0, 0, 200, 200, 0, 0, 200, 200, 0],
          }}
          //slow down the animation
          transition={{
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
        />
      </div> */}

      {/* basic button example */}
      {/* <div
        style={{
          marginTop: '20%',
          marginBottom: '20%',
        }}
        className="example-container"
      >
        <motion.div whileTap={{ scale: 0.8 }} />
      </div> */}
      <Card
        component={motion.div}
        sx={{ minWidth: 275, mb: 2 }}
        // whileHover={{ scale: 1.2 }}
        // whileTap={{ scale: 0.8 }}
        // animate={{
        //   x: move ? 200 : 0,
        // }}
        // transition={{ type: 'spring', stiffness: 300 }}
        // onClick={() => setMove(!move)}
        //chnage opacity
        //move up and down
        animate={{
          y: [0, -20, 20, -20, 20, -20, 20, 0],
        }}
        //move left and right
        // animate={{
        //   x: [0, -20, 20, -20, 20, -20, 20, 0],
        // }}
        //rotate
        // animate={{ rotate: 360 }}
        //scale
        // animate={{ scale: 1.2 }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item
            component={motion.div}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              x: move ? 200 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => setMove(!move)}
          >
            Item 1
          </Item>
          <Item component={motion.div} whileHover={{ scale: 1.2 }}>
            Item 2
          </Item>
          <Item component={motion.div} whileHover={{ scale: 1.2 }}>
            Item 3
          </Item>
        </Stack>
      </Box>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          component={motion.div}
          //chnage opacity

          //move up and down
        >
          <Fade in={open}>
            <Box component={motion.div} sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  backgroundColor: 'primary.main',

                  height: '6vh',
                  textAlign: 'center',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // border radius top left and right
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              >
                Text in a modal
              </Typography>
              <Typography
                component={motion.div}
                id="transition-modal-description"
                sx={{
                  p: 2,
                  color: 'gray[700]',
                  // border radius bottom left and right
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px',
                }}
              >
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </Box>
  );
};

export default MyButton;
