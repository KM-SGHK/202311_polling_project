import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PollOnDisplay from "./Components/onDisplay/nonMobile/PollOnDisplay";
import MobilePollOnDisplay from "./Components/onDisplay/mobile/PollOnDisplay";
import PollCards from "./Components/overview/PollCards";
import getPollData from "./utils/getPollData";
import _ from "lodash";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [allPollData, setAllPollData] = useState();
  const [onDisplayPollData, setOnDisplayPollData] = useState();
  const [pollOverviewList, setPollOverviewList] = useState();
  useEffect(() => {
    async function fetchData() {
      const fetchedAllPollData = await getPollData();
      setAllPollData(fetchedAllPollData);
      setOnDisplayPollData(fetchedAllPollData[0]);
      setPollOverviewList(_.tail(fetchedAllPollData));
    }
    localStorage.clear();
    fetchData();
  }, []);
  return (
    <Box
      style={{
        marginTop: 1,
        padding: 16,
        margin: "auto",
        width: "70%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {onDisplayPollData && (
        <Box style={{ flex: 1 }}>
          {isMobileScreen ? (
            <MobilePollOnDisplay
              onDisplayPollData={onDisplayPollData}
              allPollData={allPollData}
              setAllPollData={setAllPollData}
              setOnDisplayPollData={setOnDisplayPollData}
            />
          ) : (
            <PollOnDisplay
              onDisplayPollData={onDisplayPollData}
              allPollData={allPollData}
              setAllPollData={setAllPollData}
              setOnDisplayPollData={setOnDisplayPollData}
            />
          )}
        </Box>
      )}
      {pollOverviewList && !isMobileScreen && (
        <Box style={{ flex: 1 }}>
          <PollCards
            pollOverviewList={pollOverviewList}
            allPollData={allPollData}
            setOnDisplayPollData={setOnDisplayPollData}
            setPollOverviewList={setPollOverviewList}
          />
        </Box>
      )}
    </Box>
  );
}

export default App;
