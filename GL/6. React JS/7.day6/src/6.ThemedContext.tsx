// Import React and other necessary modules
import React, { createContext, useContext, useState } from "react";

// Define the theme interface
export interface Theme {
    background: string;
    text: string;
}

// Define the default theme
export const defaultTheme: Theme = {
    background: "#fff",
    text: "#000",
};

// Create a context for the theme
const ThemeContext = createContext<Theme | undefined>(undefined);

// Custom hook to consume the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

// Example component using the theme context
const ThemeComponent: React.FC = () => {
    const theme = useTheme();

    return (
        <div style={{ background: theme.background, color: theme.text }}>
            Themes Context - My Random Content
        </div>
    );
};

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === defaultTheme
                ? { background: "#000", text: "#fff" }
                : defaultTheme
        );
    };

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
