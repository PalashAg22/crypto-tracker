import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#14161a",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} exact />
          <Route path="/coins/:id" Component={Coinpage} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
