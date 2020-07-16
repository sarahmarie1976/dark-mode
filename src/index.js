import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import "./styles.scss";
import { useAxios } from "./Hooks/useAxios";

const App = () => {
  const [coinData, setCoinData] = useAxios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true", 
    err => console.log(err))
  const [coinList, setCoinList] = useAxios(
    'https://api.coingecko.com/api/v3/coins/list',
    err => console.log(err))
  
  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);