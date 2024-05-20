import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface NavigationButtonProps {
  text: string;
  disabled?: boolean;
  routPath?: string;
  onClick?: () => void;
}

function NavigationButton({
  text,
  disabled,
  routPath,
  onClick,
}: NavigationButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        if (!!onClick) {
          onClick();
        }
        routPath && navigate("../" + routPath);
      }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default NavigationButton;
