import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./RideSelector";
import Link from "next/link";

const Confirm = () => {

   const router = useRouter();
   const {pickup,dropoff } = router.query

    console.log("Pickup", pickup);
    console.log("Dropoff", dropoff);

  const [pickupCordinates, setPickupCordinates] = useState([0,0]);
  const [dropOffCordinates, setDropOffCordinates] = useState([0,0]);

  const getPickUpCordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidmlzaGFscGF0aWwwMSIsImEiOiJjbDBtcjk0OGcwMHh3M2Vtbjg2Y2t1Y2JxIn0.fI_UGOiwsOVTjQ-uc_n5qg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCordinates(data.features[0].center);
      });
  };

  const getDropOfCordinates = (dropoff) => {
     fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidmlzaGFscGF0aWwwMSIsImEiOiJjbDBtcjk0OGcwMHh3M2Vtbjg2Y2t1Y2JxIn0.fI_UGOiwsOVTjQ-uc_n5qg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCordinates(data.features[0].center);
      });
  };

  useEffect(() => {
   getPickUpCordinates(pickup);
    getDropOfCordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>

      <Map
        pickupCordinates={pickupCordinates}
        dropOffCordinates={dropOffCordinates}
      />

      <RideContainer>
        <RideSelector
          pickupCordinates={pickupCordinates}
          dropOffCordinates={dropOffCordinates}
        />

        <ConfirmButtonSelector>
          <ConfirmButton>Confirm Uber</ConfirmButton>
        </ConfirmButtonSelector>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;


const ConfirmButton = tw.div` 
bg-black text-white text-center
mx-4 my-4 py-4 text-2xl 
cursor-pointer 
`;

const ConfirmButtonSelector = tw.div`
border-t-2  
`;

const RideContainer = tw.div` 
flex flex-1 flex-col h-1/2 
`;

const Wrapper = tw.div` 
flex  h-screen flex-col 
`;


const ButtonContainer = tw.div` 
rounded-full absolute top-4 left-4
z-10 bg-white shadow-md cursor-pointer 
transform hover:scale-110 transition 
`;

const BackButton = tw.img` 
h-full object-contain 
`;
