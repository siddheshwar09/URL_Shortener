<div align="center">
  <h1>🔗 URL Shortener</h1>
  <p>A Modern Full-Stack Web Application for Creating and Managing Short URLs</p>
  
  [![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-4.x-black?style=for-the-badge&logo=express)](https://expressjs.com/)
  [![React](https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-7.x-13AA52?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#)
</div>

---

## 🌟 Project Overview

**URL Shortener** is a robust, full-stack web application that provides an elegant solution for creating, managing, and tracking shortened URLs. Users can easily convert long URLs into concise, shareable short links with personalized aliases, detailed analytics, and secure authentication.

The application combines a modern React frontend with a powerful Express.js backend, all backed by MongoDB for persistent data storage. It's designed with user experience and scalability in mind, featuring JWT-based authentication, URL validation, and comprehensive link management capabilities.

---

## 🚀 Key Features

- 🔗 **URL Shortening:** Convert long URLs into short, memorable links with optional custom aliases
- 📊 **Analytics & Tracking:** Monitor click statistics, creation dates, and link performance metrics
- 🔐 **Secure Authentication:** JWT-based token authentication for secure user accounts and session management
- 👤 **User Management:** Create accounts, manage profile information, and maintain link history
- 🎨 **Modern UI:** Responsive, intuitive interface built with React and optimized for all devices
- ⚡ **High Performance:** Lightning-fast URL redirects with optimized database queries
- 🛡️ **Input Validation:** Comprehensive URL and input validation to ensure data integrity

---

## 🏗️ Architecture & Tech Stack

### Frontend Ecosystem
- **Framework:** React 19.x with Vite 5.x
- **Language:** JavaScript (JSX)
- **UI & Styling:** CSS3, Responsive Design
- **State Management:** Redux (auth state)
- **API Client:** Axios with custom instance configuration
- **Routing:** React Router

### Backend Ecosystem
- **Framework:** Express.js 4.x
- **Runtime:** Node.js 20+
- **Database:** MongoDB 7.x with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Architecture Pattern:** MVC (Model-View-Controller) with Service Layer
- **Middleware:** Custom auth middleware, error handling

---

## 📂 Project Structure

```text
URL-Shortener/
├── BACKEND/                           # Express.js Backend
│   ├── app.js                         # Express app entry point
│   ├── package.json                   # Backend dependencies
│   ├── package-lock.json              # Dependency lock file
│   ├── .env                           # Environment variables (create locally)
│   ├── node_modules/                  # Installed packages
│   └── src/
│       ├── config/
│       │   ├── config.js              # Configuration management
│       │   └── monogo.config.js       # MongoDB connection setup
│       ├── controller/
│       │   ├── auth.controller.js     # Authentication endpoints
│       │   ├── short_url.controller.js # Short URL endpoints
│       │   └── user.controller.js     # User management endpoints
│       ├── dao/
│       │   ├── short_url.js           # Short URL data access layer
│       │   └── user.dao.js            # User data access layer
│       ├── middleware/
│       │   └── auth.middleware.js     # JWT authentication middleware
│       ├── models/
│       │   ├── short_url.model.js     # Short URL schema
│       │   └── user.model.js          # User schema
│       ├── routes/
│       │   ├── auth.routes.js         # Auth routes (/auth/*)
│       │   ├── short_url.route.js     # URL shortening routes
│       │   └── user.routes.js         # User management routes
│       ├── services/
│       │   ├── auth.service.js        # Authentication logic
│       │   └── short_url.service.js   # URL shortening business logic
│       └── utils/
│           ├── attachUser.js          # Attach user to request object
│           ├── errorHandler.js        # Global error handling
│           ├── helper.js              # Helper utility functions
│           └── tryCatchWrapper.js     # Try-catch wrapper for routes
│
└── FRONTEND/                          # React Vite Frontend
    ├── index.html                     # HTML entry point
    ├── package.json                   # Frontend dependencies
    ├── package-lock.json              # Dependency lock file
    ├── vite.config.js                 # Vite configuration
    ├── eslint.config.js               # ESLint configuration
    ├── node_modules/                  # Installed packages
    └── src/
        ├── main.jsx                   # React app entry point
        ├── index.css                  # Global styles
        ├── RootLayout.jsx             # Root layout component
        ├── api/
        │   ├── shortUrl.api.js        # Short URL API calls
        │   └── user.api.js            # User API calls
        ├── components/
        │   ├── LoginForm.jsx          # Login form component
        │   ├── RegisterForm.jsx       # Registration form component
        │   ├── NavBar.jsx             # Navigation bar
        │   ├── UrlForm.jsx            # URL shortening form
        │   └── UserUrl.jsx            # Display user URLs component
        ├── pages/
        │   ├── HomePage.jsx           # Home page
        │   ├── AuthPage.jsx           # Login/Register page
        │   └── DashboardPage.jsx      # User dashboard
        ├── routing/
        │   ├── auth.route.js          # Auth routes
        │   ├── dashboard.js           # Dashboard routes
        │   ├── homepage.js            # Homepage routes
        │   └── routeTree.js           # Route tree structure
        ├── store/
        │   ├── store.js               # Redux store configuration
        │   └── slice/
        │       └── authSlice.js       # Auth state slice
        ├── utils/
        │   ├── axiosInstance.js       # Axios configuration
        │   └── helper.js              # Helper functions
        └── img/                       # Image assets directory
```

---

## 🛠️ Detailed Installation Guide

Step-by-step instructions to get the frontend and backend running locally.

### Prerequisites

Ensure you have the following installed on your system:

| Requirement | Version | Description |
|-------------|---------|-------------|
| **Node.js** | 18+ | JavaScript runtime |
| **npm** | 9+ | Package manager |
| **MongoDB** | 4.4+ | NoSQL database |
| **Git** | Latest | Version control (optional) |

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd URL-Shortener
```

---

### Step 2: Backend Setup

#### 2.1 Navigate to Backend Directory
```bash
cd BACKEND
```

#### 2.2 Install Backend Dependencies
```bash
npm install
```

#### 2.3 Configure Environment Variables

Create a `.env` file in the `BACKEND` directory with the following variables:

```bash
# MongoDB Connection String
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/urlshortener

# JWT Configuration
JWT_SECRET=your_jwt_secret_key

# Server Port
PORT=5000

# Node Environment
NODE_ENV=development
```

**To get your MongoDB URL:**
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and database user
3. Click "Connect" and copy your connection string
4. Replace `username`, `password` in the connection string with your credentials

#### 2.4 Start the Backend Server
```bash
npm run dev
```

**The backend API will now be running at:**
- **API URL:** `http://localhost:5000`
- **Status:** Check by visiting the URL in your browser

---

### Step 3: Frontend Setup

#### 3.1 Open a New Terminal

**Keep the backend running in the first terminal.** Open a new terminal window and navigate to the project root.

#### 3.2 Navigate to Frontend Directory
```bash
cd FRONTEND
```

#### 3.3 Install Dependencies
```bash
npm install
```

#### 3.4 Configure Environment Variables

Create a `.env.local` file inside the `FRONTEND` directory:

```bash
# Backend API URL
VITE_API_URL=http://localhost:5000
```

#### 3.5 Start the Frontend Development Server
```bash
npm run dev
```

**The frontend interface will load at:** `http://localhost:5173` (or the URL shown in your terminal)

---

## 🏃 Running the Application (Quick Summary)

After initial setup, use these commands to run both servers:

### Terminal 1 - Backend
```bash
cd BACKEND
npm run dev
```

### Terminal 2 - Frontend
```bash
cd FRONTEND
npm run dev
```

**Access the application at:** `http://localhost:5173`

---

## 🔧 Troubleshooting

### MongoDB Connection Error
**Error:** `MongoError: connect ECONNREFUSED 127.0.0.1:27017`

**Solution:** Ensure MongoDB is running. If using MongoDB Atlas, verify:
- Your IP is whitelisted in MongoDB Atlas network settings
- Connection string credentials are correct
- VPN/network allows MongoDB connection

### Port Already in Use
**Error:** `EADDRINUSE: address already in use :::5000`

**Solution:** 
```bash
# On Windows - Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -i :5000
kill -9 <PID>
```

Or change the PORT in your `.env` file and update the frontend `VITE_API_URL` accordingly.

### Node Modules Issues
**Error:** `Cannot find module 'express'`

**Solution:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:** Ensure your backend CORS configuration includes your frontend URL (typically `http://localhost:5173` for development).

### Authentication Errors
**Error:** `401 Unauthorized` or `Invalid token`

**Solution:**
- Clear browser localStorage/cookies
- Log out and log back in
- Verify JWT_SECRET is consistent in backend
- Check token expiration settings

---

## 📡 API Reference Overview

### 1. Authentication Endpoints
- **Register:** `POST /api/auth/register` - Create new user account
- **Login:** `POST /api/auth/login` - Authenticate user and receive JWT token
- **Logout:** `POST /api/auth/logout` - End user session

### 2. URL Shortening Endpoints
- **Create Short URL:** `POST /api/shortUrl/create` - Create a new shortened URL
- **Get User URLs:** `GET /api/shortUrl/` - Fetch all URLs created by authenticated user
- **Get Single URL:** `GET /api/shortUrl/:id` - Retrieve details of a specific shortened URL
- **Update URL:** `PUT /api/shortUrl/:id` - Modify a shortened URL
- **Delete URL:** `DELETE /api/shortUrl/:id` - Remove a shortened URL
- **Redirect:** `GET /short/:alias` - Redirect to original URL

### 3. User Management Endpoints
- **Get Profile:** `GET /api/user/profile` - Fetch authenticated user's profile
- **Update Profile:** `PUT /api/user/profile` - Update user information
- **Get User Stats:** `GET /api/user/stats` - Retrieve user's URL statistics

**All endpoints (except Redirect and Register/Login) require JWT authentication via Bearer token in the Authorization header.**

---

## 📝 Example API Usage

### Register a New User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword"
  }'
```

### Create a Short URL
```bash
curl -X POST http://localhost:5000/api/shortUrl/create \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "originalUrl": "https://www.example.com/very/long/url/here",
    "alias": "myshortlink"
  }'
```

### Access Shortened URL
```bash
# In browser, visit:
http://localhost:5000/short/myshortlink
```

---







