import React from 'react';

import { motion } from 'framer-motion/dist/framer-motion';
import { Box, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

function Home() {
  // const navigate = useNavigate();
  return (
    <Box
      component={motion.div}
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, qui.
        Hic animi distinctio et maiores, ab nostrum at neque. Iusto minus
        perspiciatis vitae unde? In quibusdam nulla perspiciatis laboriosam ex.
      </p>

      <Button variant="contained" color="secondary">
        Employee Survey
      </Button>
    </Box>
  );
}

export default Home;
