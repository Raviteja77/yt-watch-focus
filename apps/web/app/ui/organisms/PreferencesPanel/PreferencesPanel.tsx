import { Box, Paper } from "@mui/material";
import { Text } from "@/ui/atoms/Text/Text";
import { Switch } from "@/ui/atoms/Switch/Switch";
import { usePersistentState } from "@/lib/PersistentStateContext";

export const PreferencesPanel = () => {
  const { state, setState } = usePersistentState();

  const toggleDarkMode = () =>
    setState({ ...state, darkMode: !state.darkMode });
  const toggleFocusMode = () =>
    setState({ ...state, focusMode: !state.focusMode });

  return (
    <Paper
      elevation={0}
      sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}
    >
      <Text variant="h5" component="h2" gutterBottom fontWeight="bold">
        Preferences
      </Text>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Text variant="subtitle1" fontWeight="medium">
              Dark Mode
            </Text>
            <Text variant="body2" color="text.secondary">
              Easier on the eyes
            </Text>
          </Box>
          <Switch checked={state.darkMode} onChange={toggleDarkMode} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Text variant="subtitle1" fontWeight="medium">
              Focus Mode
            </Text>
            <Text variant="body2" color="text.secondary">
              Hide recommendations and comments
            </Text>
          </Box>
          <Switch checked={state.focusMode} onChange={toggleFocusMode} />
        </Box>
      </Box>
    </Paper>
  );
};
