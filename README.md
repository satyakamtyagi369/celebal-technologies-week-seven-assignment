This project implements a secure JWT-based login system using Node.js and Express. It includes:

- Public login form (HTML/CSS)
- Token-based authentication
- Protected route only accessible with a valid token
- Modular structure with controllers, routes, and middleware
  jwt-auth-api/
├── controllers/
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── routes/
│ ├── authRoutes.js
│ └── protectedRoutes.js
├── public/
│ ├── login.html
│ ├── protected.html
│ └── styles.css
├── .env
├── server.js
└── README.md

How to Run This Project

### 1. Clone the Repository

```bash
git clone https://github.com/satyakamtyagi369/celebal-technologies-week-seven-assignment.git
cd jwt-auth-api

npm install
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

node server.js

http://localhost:3000/login.html


Name: Satyakam Tyagi
Node.Js Backend Developer Intern
Celebal Technologies
Roll No.: CT_CSI_NJ_5521
