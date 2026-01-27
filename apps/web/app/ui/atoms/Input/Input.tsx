import { TextField, TextFieldProps } from "@mui/material";

export type InputProps = TextFieldProps & {
    // You can add custom props here if needed
}

export const Input = (props: InputProps) => {
  return <TextField variant="outlined" fullWidth {...props} />;
};
