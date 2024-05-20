import { TextField } from "@mui/material";

interface TextDesplayProps {
  fieldName: string;
  textToDesplay: string | Number;
}

function TextDesplay({ fieldName, textToDesplay }: TextDesplayProps) {
  return (
    <TextField
      disabled
      id="filled-disabled"
      label={fieldName}
      defaultValue={textToDesplay}
      variant="filled"
      sx={{ m: 3 }}
    />
  );
}

export default TextDesplay;
