import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Stack, Button, Grid } from "@mui/material";
import { getUpdatedPoll, updateAllPollData } from "../../../utils/processPollData";

export default function ShowButton({
  onDisplayPollData,
  setOnDisplayPollData,
  allPollData,
  setAllPollData,
}) {
  const theme = useTheme();
  const isVeryLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const twoButtonColors = ["#FFA500", "#00008B"]; // for two buttons
  const sixButtonColors = ['#003366', '#B22222', '#013220', '#32127A', '#E65100', '#3C1414']; // for five buttons
  const handleVote = (optionId) => {
    const updatedPoll = getUpdatedPoll(optionId, onDisplayPollData);
    setOnDisplayPollData(updatedPoll);
    setAllPollData(updateAllPollData(updatedPoll, allPollData));
  };
  const renderButtons = (buttonOptions) => {
    return (
      <Grid container spacing={2} wrap="wrap">
        {buttonOptions.map((option, index) => (
          <Grid item xs={buttonOptions.length === 2 ? 12 : 4} key={option.id}>
            <Button
              variant="outlined"
              data-testid={`option-button-${option.id}`} 
              sx={{
                padding: "8px 16px",
                backgroundColor:
                  buttonOptions.length === 2
                    ? twoButtonColors[index]
                    : sixButtonColors[index],
                color: "white",
                fontWeight: "bold",
                minWidth: 150
              }}
              onClick={() => handleVote(option.id)}
            >
              {option.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  };
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ width: '100%', paddingLeft: 3, py: isVeryLargeScreen ? 5 : 1 }}
    >
      {renderButtons(onDisplayPollData.answer.options)}
    </Stack>
  );
}
