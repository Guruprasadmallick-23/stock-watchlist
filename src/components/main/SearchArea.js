import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToWatchlist } from "../../actions/action";
import Navbar from "../nav/Navbar";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/main.css";
import CircularProgress from "@mui/material/CircularProgress";

const SearchArea = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 2) {
      // Send API request
      setIsLoading(true);
      axios
        .get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${e.target.value}&apikey=90OP1ZTDY1DYSV3J`
        )
        .then((response) => {
          setSearchResults(response?.data?.bestMatches);
        })
        .catch((error) => {
          console.error(error);
        });
      setIsLoading(false);
    }
  };
  console.log("jjj", searchResults);

  const handleAddToWatchlist = (stock) => {
    dispatch(addToWatchlist(stock));
  };

  return (
    <>
      <Navbar />
      <div className="searchmain">
        <h1>Search for a Company</h1>
        <TextField
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Type..."
          size="small"
          sx={{ backgroundColor: "white", borderRadius: "4px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon sx={{ border: "none" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ul>
          {searchResults?.map((result) => (
            <li key={result["1. symbol"]}>
              {isLoading ? (
                CircularProgress
              ) : (
                <>
                  {result["2. name"]} - {result["5. marketPrice"]}
                  <Button
                    variant="outlined"
                    onClick={() => handleAddToWatchlist(result)}
                    size="small"
                  >
                    +
                  </Button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchArea;
