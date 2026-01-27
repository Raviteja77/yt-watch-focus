import type { Metadata } from "next";
import ThemeRegistry from "@/ui/theme/ThemeRegistry";
import { PersistentStateProvider } from "@/lib/PersistentStateContext";

export const metadata: Metadata = {
  title: "YT Watch Focus",
  description: "A focused YouTube watching experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PersistentStateProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </PersistentStateProvider>
      </body>
    </html>
  );
}
