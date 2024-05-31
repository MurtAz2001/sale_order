# Sales Order Management System

## Project Overview
This project is a Sales Order Management System built using React for the frontend and Express.js for the backend. The system allows users to view and create sales orders, manage products, and handle customer data.

## Features Implemented
- **View Sales Orders**: Users can view a list of sales orders filtered by status.
- **Create Sales Orders**: Users can create new sales orders using a form that collects necessary details.
- **Customer Management**: Customer data can be retrieved and displayed.
- **Product Management**: Product data can be retrieved and displayed.

## Technologies Used
- **Frontend**: React, React Query, Axios, Chakra UI
- **Backend**: Express.js, Node.js
- **Other**: JSON files for data storage, CORS for cross-origin requests

## Project Structure

### Frontend
- **src/hooks/useSaleOrders.js**: Custom hooks for fetching and creating sales orders.
- **src/components/CreateOrderModal.js**: Component for the modal form to create a new sales order.
- **src/App.js**: Main application component with routes and navigation.

### Backend
- **server.js**: Express server setup with endpoints to handle requests for products, customers, and sales orders.
- **data/**: Directory containing JSON files (products.json, customers.json, saleOrders.json) for data storage.

## Setup Instructions

### Backend
1. **Install Dependencies**:
    ```bash
    npm install
    ```
2. **Run the Server**:
    ```bash
    node server.js
    ```
    The server will run on [http://localhost:5000](http://localhost:5000).

### Frontend
1. **Install Dependencies**:
    ```bash
    npm install
    ```
2. **Run the Application**:
    ```bash
    npm start
    ```
    The application will run on [http://localhost:3000](http://localhost:3000).

## Endpoints

### GET /api/products
Retrieves a list of products.

### GET /api/customers
Retrieves a list of customers.

### GET /api/saleOrders
Retrieves a list of sales orders.

### POST /api/saleOrders
Creates a new sales order.

#### Request Body Example:
```json
{
  "customer_id": 11908,
  "items": [
    {
      "sku_id": 220,
      "price": 12,
      "quantity": 12
    }
  ],
  "invoice_no": "Invoice-1212121",
  "invoice_date": "7/5/2024",
  "status": "active"
}
