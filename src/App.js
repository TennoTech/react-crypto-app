import { useEffect, useState } from "react";
import Coin from './Coin'

const App = () => {
  const [coins, setCoins] = useState([]);

  let baseURL = "https://api.coinranking.com/v2/coins";
  let proxyURL = "https://cors-anywhere.herokuapp.com/";
  let API_KEY = "coinranking1fb7a80eb02176f9db5071824e48309f7dab6419f499c8a9";

  let data = fetch(`${proxyURL}${baseURL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
  });

  useEffect(() => {
    data
      .then((response) => {
        if (response.ok)
          response.json().then((json) => setCoins(json.data.coins));
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <p>Coins: {coins.length}</p>

      {coins.map((coin, key) => (
        <Coin coin={coin} key={key} />
      ))}
    </>
  );
};

export default App;
