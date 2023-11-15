import React from "react";
import { Paper, Grid } from "@mui/material";
import Description from "./Description";
import PieChart from "./PieChart";

export default function PollOnDisplay({
  onDisplayPollData,
  allPollData,
  setAllPollData,
  setOnDisplayPollData,
}) {
  return (
    <Paper
      elevation={5}
      sx={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        px: 5,
      }}
    >
      <Grid container spacing={2}>
        {/* Poll Description Section - takes up 2/3 of the space */}
        <Description
          onDisplayPollData={onDisplayPollData}
          setOnDisplayPollData={setOnDisplayPollData}
          allPollData={allPollData}
          setAllPollData={setAllPollData}
        />
        {/* Pie Chart Section - takes up 1/3 of the space */}
        <PieChart onDisplayPollData={onDisplayPollData} />
      </Grid>
    </Paper>
  );
}
