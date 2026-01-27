"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "@/ui/hooks/useLocalStorage";

interface PersistentStateContextProps {
  children: ReactNode;
}

interface StateType {
  darkMode: boolean;
  focusMode: boolean;
}

interface AuthType {
  user: any | null;
}

const defaultState: StateType = {
  darkMode: false,
  focusMode: false,
};

const defaultAuthState: AuthType = {
  user: null,
};

const PersistentStateContext = createContext({
  state: defaultState,
  setState: (newState: StateType) => {},
  authState: defaultAuthState,
  setAuthState: (newAuthState: AuthType) => {},
});

export const usePersistentState = () => useContext(PersistentStateContext);

export const LocalStorageService = {
  getItem: <T,>(key: string): T | null => {
    if (typeof window === "undefined") return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage`, error);
      return null;
    }
  },
  setItem: <T,>(key: string, value: T): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage`, error);
    }
  },
  removeItem: (key: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from localStorage`, error);
    }
  },
};

export const PersistentStateProvider: React.FC<PersistentStateContextProps> = ({
  children,
}) => {
  const [state, setState] = useLocalStorage<StateType>(
    "appState",
    defaultState
  );
  const [authState, setAuthState] = useLocalStorage<AuthType>(
    "authState",
    defaultAuthState
  );

  return (
    <PersistentStateContext.Provider
      value={{ state, setState, authState, setAuthState }}
    >
      {children}
    </PersistentStateContext.Provider>
  );
};
