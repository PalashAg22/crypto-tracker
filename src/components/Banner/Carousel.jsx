import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TrendingCoins } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../util/CommonMethod";

const Carousel = () => {
  const { currency, symbol } = useSelector((state) => state);
  const [trending, setTrending] = useState([]);
  console.log(trending);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  const fetchTrendingCurrency = async () => {
    const { data } = await axios.get(TrendingCoins(currency), {
      headers: {
        "x-cg-demo-api-key": "CG-4WJmzvtoEjusCq5DLqsFNS45",
      },
    });
    setTrending(data);
  };
  useEffect(() => {
    fetchTrendingCurrency();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_24h >= 0;
    return (
      <Link
        to={`/coins/${coin.id}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        <img src={coin.image} alt={coin.name} height="80" />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
            }}
          >
            {profit && "+"} {coin?.price_change_24h?.toFixed(2)}
          </span>
        </span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div
      style={{
        height: "50%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
