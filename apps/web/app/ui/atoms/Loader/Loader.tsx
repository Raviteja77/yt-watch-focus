import { CircularProgress, CircularProgressProps, Box } from "@mui/material";

export interface LoaderProps extends CircularProgressProps {
  center?: boolean;
}

export const Loader = ({ center, ...props }: LoaderProps) => {
  if (center) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
        <CircularProgress {...props} />
      </Box>
    );
  }
  return <CircularProgress {...props} />;
};
