import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import {
  extractLabels,
  extractOptionVoteShare,
} from "../../../utils/processPollData";
import { Grid, Typography, Box } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart({ onDisplayPollData }) {
  const data = {
    labels: extractLabels(onDisplayPollData.answer.options),
    datasets: [
      {
        data: extractOptionVoteShare(onDisplayPollData.answer.options), // Data points
        backgroundColor:
          onDisplayPollData.answer.options.length === 2
            ? ["#FFA500", "#00008B"]
            : ['#003366', '#B22222', '#013220', '#32127A', '#E65100', '#3C1414'], // Colors for the segments
        borderColor: ["#FFFFFF"], // Border color for the segments
        borderWidth: 1, // Border width for the segments
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "white",
        textAlign: "center",
        font: {
          size: 20,
          weight: "bold",
        },
        anchor: "center",
        align: "middle",
      },
    },
    maintainAspectRatio: false,
    cutoutPercentage: 50,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };

  return (
    <Grid item xs={4}>
      <Box position="relative" display="inline-block" sx={{ height: "40vh" }}>
        <Doughnut data={data} options={options} />
        <Typography
          variant="h2"
          component="div"
          style={{
            position: "absolute",
            left: "50%",
            top: onDisplayPollData.answer.options.length === 2 ? "55%" : "60%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontWeight: "bold",
          }}
        >
          %
        </Typography>
      </Box>
    </Grid>
  );
}
