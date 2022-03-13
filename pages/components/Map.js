import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import React, { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlzaGFscGF0aWwwMSIsImEiOiJjbDBtcjk0OGcwMHh3M2Vtbjg2Y2t1Y2JxIn0.fI_UGOiwsOVTjQ-uc_n5qg";

const Map = (props) => {
  // This is to initlize the map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [78.9629, 20.5937],
      zoom: 3,
    });

    if (props.pickupCordinates) {
      AddToMap(map, props.pickupCordinates);
    }

    if (props.dropOffCordinates) {
      AddToMap(map, props.dropOffCordinates);
    }

    if (props.pickupCordinates && props.dropOffCordinates) {
      map.fitBounds([props.pickupCordinates, props.dropOffCordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCordinates, props.dropOffCordinates]);

  const AddToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };


  
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div` 
flex-1 h-1/2 
`;
