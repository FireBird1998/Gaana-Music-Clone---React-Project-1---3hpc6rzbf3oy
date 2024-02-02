import React, { useState, useEffect } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Modal, Box } from "@mui/material";
import SearchBarCard from "./SearchBarCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import toast from "react-hot-toast";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    backgroundColor: `rgb(0,0,0, 0.1)`,
    borderRadius: "50px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
    [theme.breakpoints.down("md")]: {
      width: "20ch",
    },
  },
}));

const style = {
  position: "absolute",
  top: 0,
  left: 155,
  transform: "translate(0%, 0%)",
  width: 600,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Debounce function
function debounce(func, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}


const SearchWithModal = () => {
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Debounce the API call
  const debouncedSearch = debounce((query) => {
    if (!isLoading) {
      setIsLoading(true);
      fetch(
        `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${query}"}`,
        {
          headers: {
            projectid: "f104bi07c49",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error('No Search Result');
            } else {
              throw new Error('Network response was not ok');
            }
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.data);
          setSearchResults(data.data);
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
          
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, 1000); // Adjust delay as needed
  
  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm]);
  

  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Artist, Songs, Albums"
          inputProps={{ "aria-label": "search" }}
          onClick={handleOpen}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="search-modal-title"
        aria-describedby="search-modal-description"
      >
        <Box sx={style}>
          <Search sx={{
            mb: 3,

          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Artist, Songs, Albums"
              inputProps={{ "aria-label": "search" }}
              onClick={handleOpen}
              value={searchTerm}
              autoFocus
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
          <Box>
            {searchResults.length > 0 && (
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                
              >
                {searchResults.map((result) => (
                  <SwiperSlide key={result._id}>
                    <SearchBarCard
                      title={result.title}
                      img={result.thumbnail}
                      id={result._id}
                      track={result}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default SearchWithModal;
