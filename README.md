# 🔐 SecureAuthX

SecureAuthX is a full-stack authentication system built with **React.js, Redux, Node.js, Express.js, and MongoDB**.  
It provides secure user registration, login, profile management, password reset, and email verification.  
Perfect for learning and implementing real-world authentication workflows in MERN stack projects.

---

## 🚀 Features

- ✅ **User Registration**
- ✅ **Login with Email & Password**
- ✅ **Logout** using LocalStorage + Redux Store
- ✅ **Profile View & Update** with Avatar (Cloudinary Upload)
- ✅ **Change Password** (New Password Flow)
- ✅ **Email Verification** with Nodemailer
- ✅ **Forgot & Reset Password** using Tokens

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- TailwindCSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemailer
- Cloudinary

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/SecureAuthX.git
cd SecureAuthX
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

---

## Create a .env file in backend/ with the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:5173
```

---

## Start the backend:
```bash
npm run dev
```

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
---

---

## 🔑 API Endpoints

### Auth Routes
- `POST /api/auth/register` → Register User
- `POST /api/auth/login` → Login User
- `POST /api/auth/logout` → Logout User
- `GET /api/auth/verify-email/:token` → Email Verification
- `POST /api/auth/forgot-password` → Forgot Password
- `POST /api/auth/reset-password/:token` → Reset Password

### User Routes
- `GET /api/users/profile` → Get Profile
- `PUT /api/users/profile` → Update Profile
- `PUT /api/users/change-password` → Change Password

---

## 📸 Screenshots
App screenshots will be here after building UI

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a PR.

---

## 📜 License
This project is licensed under the MIT License.

---

## ✨ Author
👤 Vaibhao Hatwar

GitHub: @VaibhaoHatwar

Email: vaibhaohatwar.works@gmail.com
