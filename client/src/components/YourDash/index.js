import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const YourDash = () => {
  const [watchlist, setWatchlist] = useState([]);

  //UseEffect function, runs on page load, only once
  useEffect(() => {
    //Get the watchlist from the API
    API.getWatchlist().then((res) => {
      console.log(res.data);
    //Empty array for which to push the watchlist items
      var watchlistSymbol = [];
      console.log("This is the watchlist");
      console.log(watchlistSymbol);
      //Loop over the data and push the symbol and CEO name (temporary) into the empty array above.
      for (var i = 0; i < res.data.length; i++) {
        watchlistSymbol.push({
          symbol: res.data[i].symbol,
          ceo: res.data[i].ceo
        });
      }
      //Set the state of watchlist to the array above
      setWatchlist(watchlistSymbol)
    });
  }, []);

  console.log(watchlist);

  return (
    <div>
      <h1>You have reached Your Dashboard</h1>
      
        <div> </div>
            <table id="watch-list">
                <tbody>
                    {watchlist.map((stock) => {
                        return(
                        <tr>
                          <td>
                          {stock.symbol}
                          </td>
                          <td>
                          {stock.ceo}
                          </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
  
  );
};

export default YourDash;
