import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563EB", // Modern Indigo
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#2563eb", // Calm blue (actions, links)
    },

    background: {
      default: "#f3f4f6", // Light gray background to highlight cards
      paper: "#ffffff", // Cards, surfaces
    },

    text: {
      primary: "#111827", // Almost black (good contrast)
      secondary: "#6b7280", // Muted gray
    },

    divider: "#e5e7eb",
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },

    body1: {
      fontSize: "0.95rem",
    },

    body2: {
      fontSize: "0.875rem",
      color: "#6b7280",
    },

    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 10,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          boxShadow: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          boxShadow: "none",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#111827",
          boxShadow: "none",
          borderBottom: "1px solid #e5e7eb",
        },
      },
    },
  },
});
