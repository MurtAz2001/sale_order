import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';

const SaleOrderRow = ({ order, onEdit }) => {
    return (
        <Tr>
            <Td>{order.id}</Td>
            <Td>{order.customer_id}</Td>
            <Td>{order.items.map(item => item.sku_id).join(', ')}</Td>
            <Td>{order.invoice_no}</Td>
            <Td>{order.invoice_date}</Td>
            <Td>
                <Button onClick={() => onEdit(order)}>...</Button>
            </Td>
        </Tr>
    );
};

export default SaleOrderRow;
