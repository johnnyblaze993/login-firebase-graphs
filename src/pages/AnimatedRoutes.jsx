// import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Datas from './Datas';
import About from './About';

import SignUp from './SignUp';
import Login from './Login';
import { useState } from 'react';

function AnimatedRoutes({
  country,
  setCountry,
  chosenCountry,
  setChosenCountry,
}) {
  const location = useLocation();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userList, setUserList] = useState([]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/datas"
          element={
            <Datas
              country={country}
              setCountry={setCountry}
              chosenCountry={chosenCountry}
              setChosenCountry={setChosenCountry}
            />
          }
        />

        <Route
          path="/signUp"
          element={
            <SignUp
              user={user}
              setUser={setUser}
              userList={userList}
              setUserList={setUserList}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login
              user={user}
              setUser={setUser}
              userList={userList}
              setUserList={setUserList}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
