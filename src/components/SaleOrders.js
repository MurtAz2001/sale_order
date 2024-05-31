import React, { useState } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SaleOrderModal from './SaleOrderModal';
import SaleOrderRow from './SaleOrderRow';

const SaleOrders = ({ orders, updateOrder, createOrder }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (order) => {
        setModalData(order);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalData(null);
    };

    return (
        <Box>
            <Button onClick={() => openModal(null)}>+ Sale Order</Button>
            <Table>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Customer</Th>
                        <Th>Items</Th>
                        <Th>Invoice No</Th>
                        <Th>Date</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {orders.map(order => (
                        <SaleOrderRow key={order.id} order={order} onEdit={openModal} />
                    ))}
                </Tbody>
            </Table>
            <SaleOrderModal isOpen={isModalOpen} onClose={closeModal} defaultValues={modalData} onSubmit={modalData ? updateOrder : createOrder} />
        </Box>
    );
};

export default SaleOrders;
