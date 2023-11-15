import React from "react";
import { Paper, Grid } from "@mui/material";
import Description from "./Description";

export default function MobilePollOnDisplay({
  onDisplayPollData,
  allPollData,
  setAllPollData,
  setOnDisplayPollData,
}) {
  console.log("check onDisplayPollData", onDisplayPollData)
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        px: 3,
      }}
    >
      <Grid container spacing={2}>
        <Description
          onDisplayPollData={onDisplayPollData}
          setOnDisplayPollData={setOnDisplayPollData}
          allPollData={allPollData}
          setAllPollData={setAllPollData}
        />
      </Grid>
    </Paper>
  );
}
