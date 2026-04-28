# 🛒 E-Commerce React App (G-Mart)

A modern **React + Redux Toolkit e-commerce web application** featuring authentication, cart, wishlist, and checkout flow. Built with scalable architecture and real-world best practices.

---

## 🚀 Live Demo

---

## 📸 Preview

> Add screenshots here (recommended for portfolio impact)

* Home Page
* Product Listing
* Product Details
* Cart Page
* Wishlist Page
* Payment Portal

---

## ⚙️ Tech Stack

* ⚛️ React.js (Vite / CRA)
* 🎯 Redux Toolkit
* 🌐 React Router DOM
* 💅 Tailwind CSS
* 🔔 React Hot Toast
* 🧠 DummyJSON API
* 💾 LocalStorage for persistence

---

## ✨ Features

### 🛍️ Product System

* Fetch products from external API
* Product details page
* Category filtering system
* Responsive product grid UI

### 🛒 Cart System

* Add / remove products
* Increase / decrease quantity
* Persistent cart using localStorage
* Dynamic cart total calculation

### ❤️ Wishlist System

* Add/remove wishlist items
* Heart icon toggle (filled/unfilled state)
* Sync across product listing and wishlist page

### 🔐 Authentication

* Login / Signup functionality
* Redux-based auth state management
* Persistent login using localStorage
* Protected routes support

### 💳 Payment Portal

* Checkout page UI
* Cash on Delivery enabled
* Card & UPI shown as disabled (future-ready UI)

### 📦 Order Flow

* Cart → Checkout navigation
* Order summary section
* Ready for order success page extension

---

## 🧠 State Management (Redux Toolkit)

Slices used:

* `authSlice` → Authentication
* `cartSlice` → Cart operations
* `wishlistSlice` → Wishlist logic
* `productSlice` → Product fetching & filtering

Selectors:

* `selectCartItems`
* `selectCartTotal`
* `selectIsAuthenticated`

---

## 📁 Project Structure

```
src/
 ├── app/              # Redux store
 ├── features/
 │    ├── auth/
 │    ├── cart/
 │    ├── products/
 │    ├── wishlist/
 │    ├── payments/
 ├── shared/
 │    └── utils/
 ├── components/
 ├── routes/
 ├── assets/
```

---

## 🔥 Key Highlights

* Clean modular architecture (feature-based structure)
* Fully responsive UI (mobile-first design)
* API-driven product system
* Persistent state with localStorage
* Professional UI polish with Tailwind CSS
* Production-ready deployment setup (Vercel)

---

## 📦 Installation

```bash
git clone https://github.com/GeetanshuPatil/Ecomm-react-app.git
cd Ecomm-react-app
npm install
npm run dev
```

---

## 🚀 Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

Deployed using **Vercel**

* Auto deploy from GitHub
* SPA routing handled via `vercel.json`

---

## 🧩 Future Improvements

* Stripe / Razorpay integration
* Order success page with animations
* Backend (Node + MongoDB)
* User profile dashboard
* Real-time inventory system

---

## 👨‍💻 Author

**Geetanshu Patil**
GitHub: [https://github.com/GeetanshuPatil](https://github.com/GeetanshuPatil)

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🚀 Share it

---

💡 Built as a **portfolio-ready full-stack frontend e-commerce project**
