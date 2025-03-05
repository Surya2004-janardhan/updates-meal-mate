# 🍽️ MealMate - Food Ordering Website

MealMate is a seamless food ordering application built using **Vite + React** for the frontend and **Node.js + Express + MongoDB** for the backend. It allows users to browse, filter, and order their favorite meals while managing their cart and order history.

---

## 🚀 Features

### 🔐 User Authentication
- Secure **JWT-based authentication** (Login/Signup).
- Password hashing using **bcrypt**.
- Persistent user sessions.

### 🛒 Cart Management
- Users can **add, remove, or update items** in their cart.
- Cart persists even after page reload.

### 🍕 Food Filtering & Browsing
- Browse foods **by category** (e.g., Veg, Non-Veg, Salad).
- Search feature for quick meal discovery.

### 📦 Order Management
- **Place orders seamlessly** with address input.
- Orders are stored in MongoDB.
- Order **status tracking** (e.g., food processing, delivered).

### 💳 Razorpay Integration (Upcoming)
- Secure online payments via **Razorpay API**.

---

## 🏗️ Tech Stack

### **Frontend (Vite + React)**
- **React** – Component-based UI.
- **React Router** – Page navigation.
- **Context API** – State management for cart & auth.
- **Axios** – API communication.
- **Tailwind CSS** – Responsive UI.

### **Backend (Node.js + Express)**
- **Express.js** – Server & API handling.
- **MongoDB + Mongoose** – Database & ORM.
- **jsonwebtoken (JWT)** – Secure authentication.
- **bcrypt** – Password hashing.

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Surya2004-janardhan/MealMate_.git
cd MealMate_
