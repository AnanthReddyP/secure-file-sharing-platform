# Secure File Sharing Platform

This is a Node.js-based secure file-sharing platform that allows users to upload files and share them with a passcode. Files can be accessed only once and are automatically deleted after expiration, ensuring security and privacy.

---

## 🔐 Features

- Upload and share files securely
- Optional passcode protection
- Auto-deletion after access
- File expiration timeout
- Simple EJS frontend

---

## 🚀 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- EJS templating engine
- Multer for file handling
- Dotenv for environment variables

---

## 📁 Folder Structure

```
secure-file-sharing-platform/
├── models/              # Mongoose schema
│   └── File.js
├── views/               # EJS views for frontend
│   ├── index.ejs
│   └── passcode.ejs
├── uploads/             # Uploaded files (auto-cleanup)
├── .env                 # Env variables (DO NOT include secrets in public repos)
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🔧 Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/secure-file-sharing-platform.git
   cd secure-file-sharing-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   > Inside the root folder, add your MongoDB connection and port:
   ```env
   MONGO_URI=your_mongodb_uri_here
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**
   > Go to `http://localhost:3000` to use the app.

---

## 📜 License

MIT License – free for use with attribution.
