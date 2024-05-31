import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Input, FormControl, FormLabel, Select } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SaleOrderForm = ({ defaultValues, onSubmit }) => {
    const { handleSubmit, control } = useForm({ defaultValues });

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>Customer ID</FormLabel>
                    <Controller
                        name="customer_id"
                        control={control}
                        render={({ field }) => <Input {...field} />}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Items</FormLabel>
                    <Controller
                        name="items"
                        control={control}
                        render={({ field }) => <Select {...field} multiple />}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Invoice No</FormLabel>
                    <Controller
                        name="invoice_no"
                        control={control}
                        render={({ field }) => <Input {...field} />}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Invoice Date</FormLabel>
                    <Controller
                        name="invoice_date"
                        control={control}
                        render={({ field }) => <DatePicker {...field} />}
                    />
                </FormControl>
                <Button type='submit'>Submit</Button>
            </form>
        </Box>
    );
};

export default SaleOrderForm;
