import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import ShowButton from "./ShowButton";
import PieChart from "./PieChart";
import { calculateTotalNumberOfVotes } from "../../../utils/processPollData";

export default function Description({
  onDisplayPollData,
  setOnDisplayPollData,
  allPollData,
  setAllPollData,
}) {
  return (
    <Grid item xs={12}>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "#34b8b5", fontWeight: "bold" }}
        >
          Today's Poll
        </Typography>

        <Typography
          variant="h7"
          gutterBottom
          style={{ color: "#333333", fontWeight: "bold" }}
        >
          {onDisplayPollData.title}
        </Typography>

        <Typography
            variant="subtitle2"
            sx={{
              display: "inline",
              color: "#659ab7"
            }}
          >
            {onDisplayPollData.publishedDate}
          </Typography>

        <ShowButton
          onDisplayPollData={onDisplayPollData}
          setOnDisplayPollData={setOnDisplayPollData}
          allPollData={allPollData}
          setAllPollData={setAllPollData}
        />

        <PieChart onDisplayPollData={onDisplayPollData} />

        <Typography
          variant="h7"
          style={{ color: "#333333", fontWeight: "bold" }}
        >
          Total number of votes recorded:{" "}
          {calculateTotalNumberOfVotes(onDisplayPollData.answer.options)}
        </Typography>
      </Stack>
    </Grid>
  );
}
