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

## ⚙️ How to Run

```bash
npm install
npm start
```

> Make sure MongoDB is running and your `.env` file has the correct configuration:
```
MONGO_URI=your_mongo_connection_string
PORT=3000
```

---

## 📜 License

MIT License – free for use with attribution.
