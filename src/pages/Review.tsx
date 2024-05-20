import { Stack, TextField } from "@mui/material";
import NavigationButton from "../components/NavigationButton";
import TextDesplay from "../components/TextDesplay";

interface ReviewProps {
  firstName: string;
  lastNmae: string;
  age: Number;
}

function Review({ firstName, lastNmae, age }: ReviewProps) {
  return (
    <>
      <TextDesplay fieldName="First Nmae" textToDesplay={firstName} />
      <TextDesplay fieldName="Last Nmae" textToDesplay={lastNmae} />
      <TextDesplay fieldName="Age" textToDesplay={age} />
      <Stack spacing={2} direction="row" sx={{ ml: 1, pt: 15 }}>
        <NavigationButton text="Previos" routPath="age" />
        <NavigationButton
          text="Finish"
          routPath="/"
          onClick={() => console.log("save to local storage")}
        />
      </Stack>
    </>
  );
}

export default Review;
