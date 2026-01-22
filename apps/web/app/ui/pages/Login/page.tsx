"use client";

import { useState } from "react";
import { Box, Divider, Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import { AuthLayout } from "@/ui/templates";
import { Input, Button, Text } from "@/ui/atoms";
import { loginWithEmail, loginWithGoogle } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { usePersistentState } from "@/lib/PersistentStateContext";

export const Login = () => {
  const router = useRouter();
  const { setAuthState } = usePersistentState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const user = await loginWithEmail(email, password);
        if (user) {
            setAuthState({ user: user})
           router.push("/dashboard/home");
        }
      } catch (err: any) {
        setError(err.message);
      }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      if (user) {
        setAuthState({ user: user})
       router.push("/dashboard/home");
    }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" size="large" fullWidth>
          Sign In
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
          <Divider sx={{ flexGrow: 1 }} />
          <Text variant="body2" color="text.secondary" sx={{ mx: 2 }}>
            OR
          </Text>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>
        <Button variant="contained" color="error" size="large" fullWidth onClick={handleGoogleLogin}>
          Continue with Google
        </Button>
        {error && <Text variant="body2" color="error.main">{error}</Text>}
        <Box sx={{ textAlign: "center", mt: 1 }}>
          <Text variant="body2" color="text.secondary">
            Don&apos;t have an account?{" "}
            <MuiLink component={NextLink} href="/auth/signup" underline="hover" fontWeight="medium">
              Sign up
            </MuiLink>
          </Text>
        </Box>
      </Box>
    </AuthLayout>
  );
};
