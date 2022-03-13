import React, { useState } from 'react'
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  
  const [pickup, setPickup]= useState(" ");
  const [dropoff, setDropoff]= useState(" ");

  console.log(pickup);
  console.log(dropoff);
  
  return (
    <Wrapper>
      {/* Button Container   */}
      <Link href="/" passHref>
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      {/* Input container   */}
      <InputContainer>
        <FormToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png " />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FormToIcons>

        <InputBoxes>
          <Input
            placeholder="Enter Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          <Input
            placeholder=" Enter Destination Loacation"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>

        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      {/* save place  */}
      <SavedPlaces>
        <StartIcon src=" https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      {/* Confirm location  */}
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
        passHref
      >
        <ConfirmLocation>Confirm Location</ConfirmLocation>
      </Link>
    </Wrapper>
  );
}

export default Search;

const Wrapper = tw.div` 
bg-gray-200 h-screen 
`;

const ButtonContainer = tw.div` 
bg-white px-4
`;

const BackButton = tw.img`
h-13 transform hover:scale-110 transition cursor-pointer
`;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2 
`;

const FormToIcons = tw.div`
w-12 flex flex-col mr-2 items-center
`;

const Circle = tw.img` 
h-2.5
`;

const Line = tw.img`
h-10 
`;

const Square = tw.img`
h-5 
`;

const InputBoxes = tw.div` 
flex flex-col  flex-1   rounded-4
`; 

const Input = tw.input` 
h-10 bg-gray-200 my-3 rounded-4 p-3 outline-none border-none 
`;

const PlusIcon  = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3 
`;

const SavedPlaces = tw.div` 
flex items-center bg-white px-4 py-2 
`;

const StartIcon = tw.img` 
bg-gray-400 rounded-full w-10 h-10 p-2 mr-3 
`;

const ConfirmLocation = tw.div`
bg-black text-white h-16 px-4 m-6
 flex items-center justify-center
cursor-pointer rounded-lg text-2xl 
`;