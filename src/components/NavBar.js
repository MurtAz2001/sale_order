import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Flex, useColorMode, useDisclosure, Stack, HStack, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useAuth } from '../context/AuthContext';
import CreateOrderModal from './CreateOrderModal';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box bg="teal.500" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link to="/active-orders">Home</Link>
        </Box>
        <Flex alignItems="center">
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {isAuthenticated ? (
              <>
                <Link to="/active-orders">
                  <Button colorScheme="teal" variant="outline">Active Orders</Button>
                </Link>
                <Link to="/completed-orders">
                  <Button colorScheme="teal" variant="outline">Completed Orders</Button>
                </Link>
                <Button colorScheme="teal" variant="outline" onClick={handleOpenModal}>
                  Create Order
                </Button>
                <Button onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/">
                <Button colorScheme="teal" variant="outline">Login</Button>
              </Link>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </HStack>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {isAuthenticated ? (
              <>
                <Link to="/active-orders">
                  <Button w="full" colorScheme="teal" variant="outline">Active Orders</Button>
                </Link>
                <Link to="/completed-orders">
                  <Button w="full" colorScheme="teal" variant="outline">Completed Orders</Button>
                </Link>
                <Button w="full" colorScheme="teal" variant="outline" onClick={handleOpenModal}>
                  Create Order
                </Button>
                <Button w="full" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/">
                <Button w="full" colorScheme="teal" variant="outline">Login</Button>
              </Link>
            )}
            <Button w="full" onClick={toggleColorMode}>
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </Stack>
        </Box>
      ) : null}
      <CreateOrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Navbar;
