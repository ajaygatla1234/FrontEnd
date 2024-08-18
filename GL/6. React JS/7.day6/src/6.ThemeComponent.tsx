// Import React and other necessary modules
import React from "react";
import { useTheme } from "./6.ThemedContext";

// Example component using the theme context
const ThemeComponent: React.FC = () => {
    const theme = useTheme();

    return (
        <div style={{ background: theme.background, color: theme.text }}>
            Themes Context - My Random Content
        </div>
    );
};

export default ThemeComponent;
