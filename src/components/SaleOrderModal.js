import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderModal = ({ isOpen, onClose, defaultValues, onSubmit }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Sale Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <SaleOrderForm defaultValues={defaultValues} onSubmit={onSubmit} />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SaleOrderModal;
