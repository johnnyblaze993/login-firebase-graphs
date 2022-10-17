import React, { useEffect } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import { Autocomplete, TextField } from '@mui/material';
import { useFormik } from 'formik';

// import { Chart as ChartJS } from 'chart.js/auto';
import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';

const Datas = ({ country, setCountry, chosenCountry, setChosenCountry }) => {
  const formik = useFormik({
    initialValues: {
      country: '',
    },

    onSubmit: (event, values) => {
      formik.resetForm();
      event.preventDefault();
    },
  });

  const URL = `https://covid-193.p.rapidapi.com/statistics?country=${
    formik.values.country ? formik.values.country : 'USA'
  }`;

  const option1 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c4df70196mshb2a318dd821411dp18070ajsn28731e4daf63',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };
  useEffect(() => {
    fetch('https://covid-193.p.rapidapi.com/countries', option1)
      .then((response) => response.json())
      .then((response) => setCountry(response.response))
      .catch((err) => console.error(err));
  }, []);

  const option2 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c4df70196mshb2a318dd821411dp18070ajsn28731e4daf63',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };
  useEffect(() => {
    fetch(URL, option2)
      .then((response) => response.json())
      .then((response) => setChosenCountry(response))
      .catch((err) => console.error(err));
  }, [URL]);

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Covid-19 World Data</h1>

      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'block',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          width: 'auto',
        }}
      >
        <Autocomplete
          disablePortal
          id="country"
          name="country"
          value={formik.values.country}
          options={country}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Country" />}
          onChange={(event, value) => {
            formik.setFieldValue('country', value);
          }}
        />
      </form>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia
        in minima architecto odit sunt enim quidem blanditiis voluptates,
        provident veritatis labore. Natus pariatur eos at nemo, officia
        voluptatibus accusamus.
      </p>
      <BarChart
        country={country}
        setCountry={setCountry}
        chosenCountry={chosenCountry}
        setChosenCountry={setChosenCountry}
      />
      <DoughnutChart
        country={country}
        setCountry={setCountry}
        chosenCountry={chosenCountry}
        setChosenCountry={setChosenCountry}
      />
      <LineChart
        country={country}
        setCountry={setCountry}
        chosenCountry={chosenCountry}
        setChosenCountry={setChosenCountry}
      />
      <PieChart
        country={country}
        setCountry={setCountry}
        chosenCountry={chosenCountry}
        setChosenCountry={setChosenCountry}
      />
    </motion.div>
  );
};

export default Datas;
