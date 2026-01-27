import { Typography, TypographyProps } from "@mui/material";

export interface TextProps extends TypographyProps {
  component?: React.ElementType;
}

export const Text = (props: TextProps) => {
  return <Typography {...props} />;
};
