import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchSaleOrders = async (status) => {
  const { data } = await axios.get(`https://sale-order-backend.vercel.app/api/saleOrders`);
  return data.filter(order => order.status === status);
};

const createNewOrder = async (newOrder) => {
  const { data } = await axios.post('https://sale-order-backend.vercel.app/api/saleOrders', newOrder);
  return data;
};

export const useSaleOrders = (status) => {
  return useQuery(['saleOrders', status], () => fetchSaleOrders(status));
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries('saleOrders');
    },
  });
};

