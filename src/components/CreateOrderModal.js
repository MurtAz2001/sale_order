import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  // Textarea,
} from '@chakra-ui/react';
import { useSaleOrders } from '../hooks/useSaleOrders';

const CreateOrderModal = ({ isOpen, onClose }) => {
  const [orderData, setOrderData] = useState({
    customer_id: '',
    items: [{ sku_id: '', price: '', quantity: '' }],
    invoice_no: '',
    invoice_date: '',
    status: 'active',
  });

  const { createOrder } = useSaleOrders();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...orderData.items];
    items[index][name] = value;
    setOrderData((prevState) => ({
      ...prevState,
      items,
    }));
  };

  const handleAddItem = () => {
    setOrderData((prevState) => ({
      ...prevState,
      items: [...prevState.items, { sku_id: '', price: '', quantity: '' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(orderData, {
      onSuccess: () => {
        onClose();
        setOrderData({
          customer_id: '',
          items: [{ sku_id: '', price: '', quantity: '' }],
          invoice_no: '',
          invoice_date: '',
          status: 'active',
        });
      },
      onError: (error) => {
        console.error('Error creating order:', error);
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Customer ID</FormLabel>
            <Input name="customer_id" value={orderData.customer_id} onChange={handleChange} />
          </FormControl>
          {orderData.items.map((item, index) => (
            <div key={index}>
              <FormControl mt={4}>
                <FormLabel>SKU ID</FormLabel>
                <Input name="sku_id" value={item.sku_id} onChange={(e) => handleItemChange(index, e)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input name="price" value={item.price} onChange={(e) => handleItemChange(index, e)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Quantity</FormLabel>
                <Input name="quantity" value={item.quantity} onChange={(e) => handleItemChange(index, e)} />
              </FormControl>
            </div>
          ))}
          <Button mt={4} onClick={handleAddItem}>Add Item</Button>
          <FormControl mt={4}>
            <FormLabel>Invoice No</FormLabel>
            <Input name="invoice_no" value={orderData.invoice_no} onChange={handleChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Invoice Date</FormLabel>
            <Input name="invoice_date" value={orderData.invoice_date} onChange={handleChange} type="date" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Status</FormLabel>
            <Input name="status" value={orderData.status} onChange={handleChange} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateOrderModal;
