# 🔐 SecureAuthX - Backend

This is the **backend** of SecureAuthX, a MERN-based authentication system.  
Built with **Node.js, Express.js, MongoDB (Mongoose), Nodemailer, and Cloudinary**, it handles user registration, login, profile management, password reset, and email verification securely.

---

## 🚀 Features

- ✅ User Registration & Login with encrypted passwords (bcrypt)  
- ✅ JWT Authentication with Refresh Tokens  
- ✅ Email Verification via Nodemailer  
- ✅ Forgot & Reset Password Flow  
- ✅ Role-based Access Control (Admin/User)  
- ✅ Profile CRUD with Cloudinary Avatar Upload  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT (JSON Web Tokens)  
- Nodemailer  
- Cloudinary  

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/SecureAuthX.git
cd SecureAuthX/backend
```

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Create .env file

Create a .env file in backend/ with the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
REFRESH_TOKEN_SECRET=your_refresh_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:5173
```

### 4️⃣ Start Backend
```bash
npm run dev
```

The backend server will run on http://localhost:5000

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


## 🤝 Contributing

Fork, submit PRs, and report issues to improve the backend.

---

## 📜 License

MIT License

---

## ✨ Author
👤 Vaibhao Hatwar
GitHub: @VaibhaoHatwar
Email: vaibhaohatwar.works@gmail.com