import { Box, Stack } from "@mui/material";
import UserInput from "../components/UserInput";
import NavigationButton from "../components/NavigationButton";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import validator from "validator";

interface FullNameProps {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
}

function FullName({
  firstName,
  setFirstName,
  lastName,
  setLastName,
}: FullNameProps) {
  const [isValidInput, setIsValidInput] = useState(false);



  return (
    <Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate={false}
        autoComplete="off"
      >
        <UserInput
          inputName="First Name"
          onChange={(text) => {
            console.log('first name');
            
          }}
          text={firstName}
        />
        <UserInput
          inputName="Last Name"
          onChange={(text) => {
            console.log('last name');
          }}
          text={lastName}
        />
      </Box>
      <Stack spacing={2} direction="row" sx={{ ml: 3, pt: 15 }}>
        <NavigationButton text="Previos" />
        <NavigationButton text="Next" routPath="age" disabled={!isValidInput} />
      </Stack>
    </Box>
  );
}

export default FullName;
