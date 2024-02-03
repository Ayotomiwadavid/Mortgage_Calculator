import { Stack, Typography } from "@mui/material";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, interestRate, loanTerm } = data;

  const totalLoanMonths = loanTerm * 12;
  const InterestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      InterestPerMonth *
      (1 + InterestPerMonth) ** totalLoanMonths) /
    ((1 + InterestPerMonth) ** totalLoanMonths - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  const pieChartData = {
    labels: ["principle", "interest"],
    datasets: [
      {
        label: "ratio of principle and interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign="center" variant="h6">
        Monthly payment: $ {monthlyPayment.toFixed(2)}
        <Stack gap={3} direction="row" justifyContent="center">
        <div>
        <Pie data={pieChartData} />
        </div>
        </Stack>
      </Typography>
    </Stack>
  );
};

export default Result;
