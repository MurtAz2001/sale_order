import React, { createContext, useContext, useEffect, useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const chakraTheme = extendTheme({
        config: {
            initialColorMode: theme,
            useSystemColorMode: false,
        },
    });

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ChakraProvider theme={chakraTheme}>
                {children}
            </ChakraProvider>
        </ThemeContext.Provider>
    );
};
