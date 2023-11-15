import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
  Box,
} from "@mui/material";
import {
  calculateTotalNumberOfVotes
} from "../../utils/processPollData";
import { filterAllPollData } from "../../utils/processPollData";

export default function PollCard({
  data,
  setOnDisplayPollData,
  setPollOverviewList,
  allPollData,
}) {
  let poll = data;
  const handleCardClick = (poll) => {
    setOnDisplayPollData(poll);
    setPollOverviewList(filterAllPollData(poll.id, allPollData));
  };
  return (
    <Grid item xs={12} sm={6} id={poll.id}>
      <Card raised style={{ height: "100%" }}>
        <CardActionArea onClick={() => handleCardClick(poll)}>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                {/* Encircled chart icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#34b8b5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      color="white"
                      sx={{ fontWeight: "bold" }}
                    >
                      %
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1" color="textSecondary">
                  {poll.publishedDate}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ minHeight: "64px" }}
                >
                  {poll.title}
                </Typography>
                <Typography variant="body2">
                  Total number of votes recorded:{" "}
                  {calculateTotalNumberOfVotes(poll.answer.options)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
