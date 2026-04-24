# 🚀 DevConnect API – Developer Collaboration Platform

A powerful REST API that enables developers to connect, showcase projects, and collaborate in a social-platform style environment.

---

## 📌 Overview

DevConnect API is a backend system designed for developers to:
- Create and manage profiles 👨‍💻  
- Share and showcase projects 🚀  
- Like and comment on projects 💬  
- Follow other developers 🔗  

This project helps you learn real-world backend development, API design, and authentication.

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  
- bcrypt.js  
- dotenv  

---

## 📁 Project Structure
```
devconnect-api/
│── config/
│   └── db.js
│── models/
│   ├── User.js
│   ├── Project.js
│── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── projectRoutes.js
│── middleware/
│   └── authMiddleware.js
│── .env
│── server.js
│── package.json
│── README.md
```
---

## ⚙️ Installation & Setup

### 1. Clone Repository
git clone https://github.com/yourusername/devconnect-api.git
cd devconnect-api

### 2. Install Dependencies
npm install

### 3. Create .env File
```
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
```
### 4. Run Server

Development:
```
npm run dev
```
Production:
npm start

---

## 🌐 Base URL
```
http://localhost:5000/api
```
---

## 🔐 Authentication

This API uses JWT Authentication.

Add token in headers:

Authorization: your_token

---

## 📡 API Endpoints

### 🔑 Auth Routes
```
POST /api/auth/register  
POST /api/auth/login  
```
---

### 👤 User Routes
```
GET /api/users/:id  
POST /api/users/follow/:id  
```
---

### 🚀 Project Routes
```
POST /api/projects  
GET /api/projects  
POST /api/projects/like/:id  
POST /api/projects/comment/:id  
```
---

## 🧪 Testing

Use tools like:
- Postman  
- Thunder Client (VS Code)  

---

## 🔒 Security Features

- Password hashing (bcrypt)  
- JWT authentication  
- Protected routes  

---

## 🚀 Future Enhancements

- Frontend (React / Next.js)  
- Dashboard & analytics  
- Search & filtering  
- Image upload (Cloudinary)  
- Notifications  
- AI recommendations  

---

## 🌍 Deployment

You can deploy on:
- Render  
- Railway  
- AWS  
- DigitalOcean  

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch  
3. Commit changes  
4. Open Pull Request  

---

## 📄 License

MIT License

---

## 💡 Author

Rishi Soni  

---

## ⭐ Support

If you like this project:
- Star the repo  
- Share it  
- Contribute  

---
