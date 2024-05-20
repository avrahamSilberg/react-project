import UserInput from "../components/UserInput";
import { Stack } from "@mui/material";
import NavigationButton from "../components/NavigationButton";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import validator from "validator";

interface AgeProps {
  setAge: Dispatch<SetStateAction<number>>;
  age: number;
}

function Age({ setAge, age }: AgeProps) {
  const [isValidInput, setIsValidInput] = useState(!!age);

  useEffect(() => {
    setIsValidInput(!!age);
  }, [age]);

  const setField = (text: string): void => {
    if (validator.isInt(text)) {
      setAge(parseInt(text));
    } else {
      setAge(NaN);
    }
  };

  return (
    <>
      <UserInput
        inputName="Age"
        onChange={(n) => setField(n)}
        text={!!age ? age.toString() : ""}
      />
      <Stack spacing={2} direction="row" sx={{ ml: 1, pt: 15 }}>
        <NavigationButton text="Previos" routPath="full-name" />
        <NavigationButton
          text="Next"
          routPath="review"
          disabled={!isValidInput}
        />
      </Stack>
    </>
  );
}

export default Age;
