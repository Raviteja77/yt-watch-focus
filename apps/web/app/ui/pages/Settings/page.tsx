"use client";

import { Paper } from "@mui/material";
import { SettingsLayout } from "@/ui/templates";
import { Text } from "@/ui/atoms";

export const Settings = () => {
  return (
    <SettingsLayout>
      <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <Text variant="h5" gutterBottom fontWeight="bold">
          Account Settings
        </Text>
        <Text variant="body1" color="text.secondary">
          Manage your account details, privacy, and security settings here.
        </Text>
      </Paper>
    </SettingsLayout>
  );
};
