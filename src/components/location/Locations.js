"use client";

import React, { useState, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, Marker } from "@googlemaps/react-wrapper";

const Location = ({ locations = [] }) => {
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.006 });

  useEffect(() => {
    if (locations.length > 0) {
      const latSum = locations.reduce((sum, loc) => sum + loc.lat, 0);
      const lngSum = locations.reduce((sum, loc) => sum + loc.lng, 0);
      setCenter({
        lat: latSum / locations.length,
        lng: lngSum / locations.length,
      });
    }
  }, [locations]);

  return (
    <Wrapper
      apiKey="AIzaSyBC5qDZSA_-Nat2Q418ovUZIjRs6v8E--E"
      render={renderStatus}
    >
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={center}
        zoom={11}
      >
        {locations.map((location, key) => (
          <Marker position={location} key={key}/>
        ))}
      </GoogleMap>
    </Wrapper>
  );
};

// This function renders the status of the map loading
const renderStatus = (status) => {
  if (status === Status.LOADING) return <div>Loading...</div>;
  if (status === Status.FAILURE) return <div>Error loading map</div>;
  return <div>Should Show Something</div>;
};

export default Location;