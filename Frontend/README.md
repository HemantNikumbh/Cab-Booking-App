# Frontend

A React-based frontend application that mimics core Uber functionality, built with modern web technologies.

## 🚀 Features

- Authentication (Login/Signup)
- Captain/Driver Authentication
- Protected Routes
- Responsive Design
- Session Management

## 🛠️ Technologies Used

- React 18
- React Router v6
- Axios
- TailwindCSS
- Context API for State Management

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Uber/Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```
VITE_API_URL=http://localhost:4000
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
Frontend/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── UserLogin.jsx
│   │   ├── UserSignup.jsx
│   │   ├── UserLogout.jsx
│   │   ├── CaptainLogin.jsx
│   │   ├── CaptainSignup.jsx
│   │   └── UserProtectWrapper.jsx
│   ├── context/
│   │   └── UserContext.jsx
│   └── App.jsx
├── .env
└── package.json
```

## 🔒 Authentication Flow

- Users can register with email and password
- Login generates a JWT token
- Protected routes require authentication
- Session management using localStorage

## 🛣️ Available Routes

- `/` - Landing page
- `/UserLogin` - User login page
- `/UserSignup` - User registration page
- `/CaptainLogin` - Captain/Driver login
- `/CaptainSignup` - Captain/Driver registration
- `/Home` - Protected main dashboard
- `/UserLogout` - Logout functionality

## 🔐 Protected Routes

Protected routes are wrapped with `UserProtectWrapper` component which:
- Checks for valid authentication token
- Redirects to login if token is invalid/missing
- Maintains user session

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

