import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCordinates, dropOffCordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  // get ride duration from mapbox-api
  //  1) pickup coordinates
  // 2) dropOff coordinates

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCordinates[0]},${pickupCordinates[1]};${dropOffCordinates[0]},${dropOffCordinates[1]}?access_token=pk.eyJ1IjoidmlzaGFscGF0aWwwMSIsImEiOiJjbDBtcjk0OGcwMHh3M2Vtbjg2Y2t1Y2JxIn0.fI_UGOiwsOVTjQ-uc_n5qg`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.routes) {
          setRideDuration(data.routes[0].duration / 100);
        }
      })
      .catch((e) => console.log(e));
  }, [pickupCordinates, dropOffCordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more </Title>
      <Carlist>
        {carList.map((car) => (
          <Car key=" ">
            <CarImage src={car.imgUrl} alt=" car logo" />

            <CarDetails>
              <Service>{car.service}</Service>
              <Time> 7 min away </Time>
            </CarDetails>
            <Price>{"₹" + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </Carlist>
    </Wrapper>
  );
};

export default RideSelector;

const Price = tw.div` 
text-m 
`;

const Time = tw.div` 
text-xs text-blue-500 
`;

const Service = tw.div` 
font-medium text-bold 
`;

const CarDetails = tw.div`
flex-1 
`;

const CarImage = tw.img` 
h-14  mr-4 
`;

const Car = tw.div` 
flex   p-4  items-center    
`;

const Carlist = tw.div` 
overflow-y-scroll 
`;

const Title = tw.div` 
text-gray-500  text-center text-x5 py-2 border-b  
`;

const Wrapper = tw.div` 
flex-1 overflow-y-scroll flex flex-col 
`;
