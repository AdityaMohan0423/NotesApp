# Note-Taking App Backend

A simple and secure RESTful API for creating, reading, updating, and deleting personal notes. Built using Node.js, Express, MongoDB, and JWT authentication.

---

## Features

- Register and login users with hashed passwords
- JWT-based authentication
- Create, read, update, and delete personal notes
- Authorization: Only the owner can access their notes
- MongoDB with Mongoose models

---

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- dotenv

---

## Installation

1. **Clone the repository**

```bash
git clone
cd note-app-backend
```

2. **Install dependencies**

```bash
npm install
```

3. Set up environment variables
   > create a .env file in the root directory(😇 in the same folder in which src is present..)

```.env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000 (any port that you want😃 and which is free 🗿😒)
```

4. **Run the server**

```bash
npm run dev    # for development (nodemon)->(after this no need to restart server again&again🥳🤩)
npm start      # for production
```

🙋‍♂️ Author
Aditya Mohan
Made with 😜(fun).
