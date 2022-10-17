import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const About = () => {
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>About Page</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi
        debitis fuga deserunt, placeat qui optio totam perspiciatis error.
        Repudiandae, enim veniam. Dolorum officiis recusandae consequuntur
        veritatis magni aliquam itaque.
      </p>
    </motion.div>
  );
};

export default About;
