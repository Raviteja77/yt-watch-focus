"use client";

import { AppBar, Toolbar, Box } from "@mui/material";
import { Header } from "@/ui/molecules/Header/Header";
import { SearchBar } from "@/ui/molecules/SearchBar/SearchBar";
import { Button } from "@/ui/atoms/Button/Button";
import {
  usePersistentState,
  LocalStorageService,
} from "@/lib/PersistentStateContext";
import { useRouter } from "next/navigation";

interface NavigationBarProps {
  onSearch: (query: string) => void;
}

export const NavigationBar = ({ onSearch }: NavigationBarProps) => {
  const { authState, setAuthState } = usePersistentState();
  const router = useRouter();

  const onLogout = () => {
    setAuthState({ user: null });
    LocalStorageService.removeItem("authState");
  };

  const navigateToLogin = () => {
    router.push("/auth/login");
  };
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        <Header title="YT Watch Focus" />
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: 600,
            mx: "auto",
            display: { xs: "none", sm: "block" },
          }}
        >
          <SearchBar onSearch={onSearch} placeholder="Search..." />
        </Box>
        <Box>
          {authState?.user ? (
            <Button variant="outlined" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" onClick={navigateToLogin}>
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
