import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const App = () => {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 3000,
    interestRate: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item md={6} xs={12}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item md={6} xs={12}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
