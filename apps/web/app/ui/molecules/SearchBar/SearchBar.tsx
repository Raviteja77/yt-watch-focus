"use client";

import { useEffect, useState } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Input } from "@/ui/atoms/Input/Input";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "@/ui/hooks/useDebounce";
import { Close } from "@mui/icons-material";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  onSearch,
  placeholder = "Search...",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const debouncedValue = useDebounce<string>(query, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const clearInput = () => {
    setQuery("");
    onSearch(debouncedValue);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        width: "100%",
        height: "100%", // Set the height to maintain consistency
      }}
    >
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        type="search"
        size="small"
        sx={{
            "& .MuiInputBase-input::-webkit-search-cancel-button": {
              display: "none",
              WebkitAppearance: "none",
            },
          }}  
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {query ? (
                <IconButton onClick={clearInput} edge="end" aria-label="clear">
                  <Close />
                </IconButton>
              ):
              (<IconButton type="submit" edge="end" aria-label="search">
                <SearchIcon />
              </IconButton>)}
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </Box>
  );
};
