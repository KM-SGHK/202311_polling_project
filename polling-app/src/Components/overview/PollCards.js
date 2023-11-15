import React from "react";
import { Paper, Grid } from "@mui/material";
import PollCard from "./PollCard";

export default function PollCards({
  pollOverviewList,
  allPollData,
  setOnDisplayPollData,
  setPollOverviewList,
}) {
  return (
    <Paper
      elevation={5}
      sx={{
        height: "46vh",
        display: "flex",
        alignItems: "center",
        px: 5,
      }}
    >
      <Grid container spacing={2}>
        {pollOverviewList.map((poll, index) => (
          <PollCard
            data={poll}
            setPollOverviewList={setPollOverviewList}
            setOnDisplayPollData={setOnDisplayPollData}
            allPollData={allPollData}
          />
        ))}
      </Grid>
    </Paper>
  );
}
