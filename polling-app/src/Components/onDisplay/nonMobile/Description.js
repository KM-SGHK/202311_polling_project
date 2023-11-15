import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import ShowButton from "./ShowButton";
import { calculateTotalNumberOfVotes } from "../../../utils/processPollData";

export default function Description({
  onDisplayPollData,
  setOnDisplayPollData,
  allPollData,
  setAllPollData,
}) {
  return (
    <Grid item xs={8}>
      <Stack spacing={2}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "#34b8b5", fontWeight: "bold" }}
        >
          Today's Poll
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          style={{ color: "#333333", fontWeight: "bold" }}
        >
          {onDisplayPollData.title}
          <Typography
            component="span"
            variant="subtitle1"
            sx={{
              display: "inline",
              paddingLeft: 2,
              color: "#659ab7",
              fontWeight: "bold",
            }}
          >
            {onDisplayPollData.publishedDate}
          </Typography>
        </Typography>

        <ShowButton
          onDisplayPollData={onDisplayPollData}
          setOnDisplayPollData={setOnDisplayPollData}
          allPollData={allPollData}
          setAllPollData={setAllPollData}
        />

        <Typography
          variant="body1"
          style={{ color: "#333333", fontWeight: "bold" }}
        >
          Total number of votes recorded:{" "}
          {calculateTotalNumberOfVotes(onDisplayPollData.answer.options)}
        </Typography>
      </Stack>
    </Grid>
  );
}
