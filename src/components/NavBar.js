import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Spacer, useColorMode } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import CreateOrderModal from './CreateOrderModal';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <Flex as="nav" p="4" bg="teal.500" color="white" align="center">
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Spacer />
      <Box>
        {isAuthenticated ? (
          <>
            <Link to="/active-orders">
              <Button colorScheme="teal" variant="outline" mr="4">Active Orders</Button>
            </Link>
            <Link to="/completed-orders">
              <Button colorScheme="teal" variant="outline" mr="4">Completed Orders</Button>
            </Link>
            <Button colorScheme="teal" variant="outline" mr="4" onClick={handleOpenModal}>
              Create Order
            </Button>
            <Button onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Link to="/">
            <Button colorScheme="teal" variant="outline" mr="4">Login</Button>
          </Link>
        )}
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>
      <CreateOrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Flex>
  );
};

export default Navbar;
