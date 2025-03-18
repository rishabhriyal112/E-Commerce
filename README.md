# ShopEase - Modern eCommerce Platform

A responsive and feature-rich eCommerce platform built with React, JavaScript, and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Product Browsing**: Browse products by category, filter by price and brand
- **Product Search**: Find products quickly with the search functionality
- **Product Details**: View detailed product information, specifications, and related products
- **Shopping Cart**: Add products to cart, update quantities, and remove items
- **User Authentication**: Register, login, and manage your account
- **Checkout Process**: Easy checkout with a multi-step form
- **Profile Management**: Update personal information and view order history

## Tech Stack

- **React**: Frontend library for building user interfaces
- **React Router**: For handling navigation between pages
- **Tailwind CSS**: For styling and responsive design
- **Context API**: For state management (cart and authentication)
- **Webpack**: For bundling and building the application

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopease.git
   cd shopease
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
shopease/
├── public/             # Public assets and HTML template
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── context/        # Context providers for state management
│   ├── data/           # Sample data for the application
│   ├── pages/          # Page components
│   ├── App.js          # Main App component with routing
│   ├── index.js        # Entry point
│   └── index.css       # Global styles and Tailwind directives
├── webpack.config.js   # Webpack configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

## Demo Credentials

For testing the application, you can use the following credentials:

- **Email**: user@example.com
- **Password**: password123

## Building for Production

To create a production build:

```bash
npm run build
```

The build will be available in the `dist` directory.

## License

This project is licensed under the MIT License. 
