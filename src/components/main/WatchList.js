import { Box, Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../nav/Navbar";
import "../../styles/main.css";

const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist);
  console.log(watchlist);
  return (
    <>
      <Navbar />
      <Box className="watchlist-main">
        {watchlist.map((stock, i) => (
          // <li key={stock["1. symbol"]}>
          //   {stock["2. name"]} - {stock["5. marketPrice"]}
          // </li>
          <Card key={i} className="card">
            <h1>{stock["2. name"]}</h1>
            <div>
              <h2>Type:{stock["3. type"]}</h2>
              <h2>Region:{stock["4. region"]}</h2>
            </div>
            <div className="time">
              <p>Open:{`${stock["5. marketOpen"]} ${stock["7. timezone"]}`}</p>
              <p>
                Close:{`${stock["6. marketClose"]} ${stock["7. timezone"]}`}
              </p>
            </div>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default WatchList;
