import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    );
};

export default ToggleTheme;
