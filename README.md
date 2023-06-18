# E-commerce Panel with Next.js and MongoDB

This is an E-commerce Panel built using Next.js, a React framework for server-side rendering, and MongoDB, a NoSQL database. It provides a user-friendly interface for managing and administering an e-commerce website.

## Features

- User Management: Admins can create, update, and delete user accounts. Users can sign up, log in, and update their profile information.
- Product Management: Admins can add, edit, and remove products from the inventory. Each product includes details such as name, description, price, and images.
- Categories Management: Admins can manage product categories, including creating new categories, updating existing ones, and deleting categories.
- Order Management: Admins can view and process orders placed by customers. They can update the order status, track deliveries, and manage inventory.
- Shopping Cart: Customers can add products to their shopping cart, review their items, and proceed to checkout.
- Responsive Design: The panel is designed to be mobile-friendly, providing a seamless experience across different devices.

## Technologies Used

- Next.js: A React framework for server-side rendering.
- MongoDB: A NoSQL database for storing and retrieving data.
- HTML/CSS: Front-end languages for creating the user interface.
- JavaScript: The programming language used for client-side interactions.
- Git: Version control system for tracking changes and collaborating with others.

## Screeshots

<img src="https://github.com/DevShubX/ecommerce-admin/blob/main/ecomm-admin-ss/screenshot-1.png"/>

<img src="https://github.com/DevShubX/ecommerce-admin/blob/main/ecomm-admin-ss/screenshot-2.png"/>

<img src="https://github.com/DevShubX/ecommerce-admin/blob/main/ecomm-admin-ss/screenshot-3.png"/>

## Installation

1. Clone the respository
```bash
git clone https://github.com/DevShubX/ecommerce-panel.git
```
2. Install the dependencies
```bash
npm install
```
3. Set up your environment variables:
- Create a .env.local file in the project's root directory.
- Define the following variables in the .env.local file:

```bash
NEXT_APP_MONGODB_URL = <your_mongodb_url>
```

4. Start the development server
```bash
npm run dev
```
5. Open your browser and visit http://localhost:3000 to access the E-commerce Panel.
  
6. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


### Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.

Feel free to customize and enhance this E-commerce Panel to fit your specific requirements. Happy coding!


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
