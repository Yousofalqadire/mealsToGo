import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import MapView from "react-native-maps";
import { Search } from "../map/components/Search.component";
import styled from "styled-components/native";
import { LocationContext } from "../../services/location/location.context";
import { ResturnatContext } from "../../services/resturant/resturant.context";
const Map = styled(MapView)`
  flex: 1;
  height: 100%;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { resturants = [] } = useContext(ResturnatContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lng, lat } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {resturants.map((resturant) => {
          return (
            <MapView.Marker
              key={resturant.name}
              title={resturant.name}
              coordinate={{
                latitude: resturant.geometry.location.lat,
                longitude: resturant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </>
  );
};
