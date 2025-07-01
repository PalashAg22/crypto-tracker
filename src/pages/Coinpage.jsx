import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import { LinearProgress, Typography } from "@mui/material";
import HTMLReactParser from "html-react-parser/lib/index";
import { numberWithCommas } from "../util/CommonMethod";
const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = useSelector((state) => state);

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id), {
      headers: {
        "x-cg-demo-api-key": "CG-4WJmzvtoEjusCq5DLqsFNS45",
      },
    });
    setCoin(data);
  };
  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "25px",
          borderRight: "2px solid grey",
        }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "Montserrat",
            marginBottom: 4,
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: 5,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
          }}
        >
          {coin?.description.en.split(". ")[0]}
        </Typography>
        <div
          style={{
            alignSelf: "start",
            padding: 25,
            paddingTop: 10,
            width: "100%",
          }}
        >
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Rank:</Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Current Price:</Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Market Cap:</Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      {/*chart*/}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default Coinpage;
