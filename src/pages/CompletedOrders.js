import React from 'react';
import { useSaleOrders } from '../hooks/useSaleOrders';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

const CompletedOrders = () => {
  const { data: orders, isLoading, isError } = useSaleOrders('completed');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading completed orders.</div>;
  }

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer ID</Th>
            <Th>Status</Th>
            <Th>Invoice No</Th>
            <Th>Invoice Date</Th>
            <Th>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>
                <Td>{order.customer_id}</Td>
                <Td>{order.status}</Td>
                <Td>{order.invoice_no}</Td>
                <Td>{order.invoice_date}</Td>
                <Td>
                  {order.items.map((item) => (
                    <div key={item.sku_id}>
                      {item.product_name} {item.quantity} x ${item.price}
                    </div>
                  ))}
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan="6">No completed orders available.</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CompletedOrders;
