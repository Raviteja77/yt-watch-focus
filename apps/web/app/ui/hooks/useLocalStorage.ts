"use client";

import { useState, useEffect, useCallback } from "react";
import { LocalStorageService } from "@/lib/PersistentStateContext";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize with initialValue to avoid hydration mismatch between server and client
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Load from local storage after mount
  useEffect(() => {
    const item = LocalStorageService.getItem<T>(key);
    if (item !== null) {
      setStoredValue(item);
    }
  }, [key]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      setStoredValue((currentValue) => {
        const valueToStore =
          value instanceof Function ? value(currentValue) : value;
        LocalStorageService.setItem(key, valueToStore);
        return valueToStore;
      });
    },
    [key]
  );

  return [storedValue, setValue] as const;
}
