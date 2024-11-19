import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [ipDetails, setIpDetails] = useState({});
  const [showList, setShowList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  const fetchIP = async () => {
    setShowList(true);

    try {
      setIsLoading(true);
      const res = await fetch(`https://freeipapi.com/api/json/`);
      const data = await res.json();

      setIpDetails(data);

      setLat(data.latitude);
      setLon(data.longitude);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="app_container">
        <h1>
          Check your location <br /> IP address
        </h1>
        <div>
          <button onClick={fetchIP}>Click</button>
          {showList && (
            <ul>
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                <>
                  {" "}
                  <li>
                    {" "}
                    <strong>Version:</strong>{" "}
                    <span> {ipDetails.ipVersion}</span>
                  </li>
                  <li>
                    {" "}
                    <strong>IP address:</strong>{" "}
                    <span>{ipDetails.ipAddress}</span>
                  </li>
                  <li>
                    <strong>City:</strong> <span> {ipDetails.cityName}</span>
                  </li>
                  <li>
                    {" "}
                    <strong>Region:</strong>{" "}
                    <span> {ipDetails.regionName}</span>
                  </li>
                  <li>
                    <strong>Country:</strong>{" "}
                    <span>{ipDetails.countryName}</span>
                  </li>
                  <li>
                    <strong>Country code:</strong>{" "}
                    <span>{ipDetails.countryCode}</span>
                  </li>
                  <li>
                    {" "}
                    <strong>TimeZone:</strong> <span>{ipDetails.timeZone}</span>
                  </li>
                  <li>
                    {" "}
                    <strong>ZipCode:</strong> <span>{ipDetails.zipCode}</span>
                  </li>
                  <li>
                    <strong>Currency:</strong>{" "}
                    <span>{ipDetails.currency?.code}</span>
                  </li>
                  <li>
                    {" "}
                    <strong>Language</strong> <span>{ipDetails.language}</span>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
