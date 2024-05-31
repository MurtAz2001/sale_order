import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import theme from './context/ThemeContext';
import Navbar from './components/NavBar';
import Login from './components/Login';
import ActiveOrders from './pages/ActiveOrders';
import CompletedOrders from './pages/CompletedOrders';
import CreateOrderModal from './components/CreateOrderModal';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
      {/* <ChakraProvider theme={theme}> */}
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/active-orders" element={<PrivateRoute><ActiveOrders /></PrivateRoute>} />
              <Route path="/completed-orders" element={<PrivateRoute><CompletedOrders /></PrivateRoute>} />
              <Route path="/create-order" element={<PrivateRoute><CreateOrderModal /></PrivateRoute>} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Router>
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
