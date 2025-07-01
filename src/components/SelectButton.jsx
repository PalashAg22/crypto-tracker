import { Box } from "@mui/material";
import React from "react";

const SelectButton = ({ children, onClick, selected }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        border: "1px solid gold",
        borderRadius: 2,
        px: 2.5,
        py: 1.2,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "gold" : "transparent",
        color: selected ? "black" : "white",
        fontWeight: selected ? 700 : 500,
        width: "22%",
        textAlign: "center",
        "&:hover": {
          backgroundColor: "gold",
          color: "black",
          fontWeight: "bold",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SelectButton;
