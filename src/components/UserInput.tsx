import TextField from "@mui/material/TextField";

interface UserInputProps {
  inputName: string,
  text: string,
  onChange: (text: string) => void,
}

function UserInput({ inputName, onChange, text}: UserInputProps) {
  return (
    <TextField
      id="outlined-basic"
      label={inputName}
      variant="outlined"
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default UserInput;
