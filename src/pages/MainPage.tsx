import { Typography } from "@mui/material";
import NavigationButton from "../components/NavigationButton";

function MainPage() {
  return (
    <>
      <Typography sx={{ mb: 5 }}>
        Hi and welcome, pleass press the button beneath
      </Typography>
      <NavigationButton text={"Start"} routPath="full-name" />
    </>
  );
}

export default MainPage;
