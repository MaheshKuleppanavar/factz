# FACTZ — Full Stack Mini Project

## 📌 Overview

**FACTZ** is a simple full-stack web application built as part of the *Intern Technical Assignment*. The application consists of:

* A **Node.js (Express) backend** that exposes a REST API returning a hardcoded list of facts.
* A **React (Vite) frontend** that fetches and displays these facts in a simple user interface.
* The application is deployed publicly so that both frontend and backend can be accessed via URLs.

---

## 📁 Project Structure

```
FACTZ/
│
├── backend/
│   ├── node_modules/        # Ignored (not pushed to GitHub)
│   ├── .env                 # Environment variables (ignored)
│   ├── package.json
│   ├── package-lock.json
│   └── server.js            # Main backend API file
│
├── frontend/
│   ├── node_modules/        # Ignored
│   ├── dist/                # Production build files
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── .gitignore
│
├── .gitignore               # Root git ignore file
├── README.md                # Project documentation

---

## 🚀 How I Developed This Application

### **Task 1 — Backend (API Development)**

* Used **Node.js with Express.js** to create a REST API.
* Created an endpoint:

  ```
  GET /api/facts
  ```
* The API returns a hardcoded JSON response like:

```json
[
  { "id": 1, "fact": "The sun is a star." },
  { "id": 2, "fact": "Water boils at 100°C." },
  { "id": 3, "fact": "Earth has one moon." }
]
```

* Added CORS support so that the frontend can communicate with the backend.
* Tested the API locally using Postman and browser before deployment.

### **Task 2 — Frontend (UI Development)**

* Built the frontend using **React with Vite** for fast development.
* The frontend:

  * Calls the backend API using `fetch()`
  * Retrieves the list of facts
  * Displays them in a clean, simple UI
* Used basic CSS for styling and readability.

### **Task 3 — Deployment (Cloud Hosting)**

Instead of Azure or AWS, I deployed the application using **Render** because:

> **Azure/AWS Free Tier could not be used due to the unavailability of a valid credit card and student email, as I have already graduated from my college.**

### ✅ Deployment Details (Render)

* **Backend** deployed on:

  ```
  https://backendurl.onrender.com
  ```
* **Frontend** deployed on:

  ```
  https://frontendurl.onrender.com
  ```

Both frontend and backend are publicly accessible and working together.

---

## 📂 Task 4 — GitHub Repository

* The full source code is pushed to a **public GitHub repository**.
* Proper folder structure is maintained with separate `backend/` and `frontend/` directories.

---

## 📚 What I Learned from This Exercise

Through this project, I learned:

* How to build a REST API using **Node.js and Express.js**
* How to structure a backend project properly
* How to connect a React frontend with a backend API
* How CORS works and why it is needed
* How to deploy both frontend and backend to a cloud platform
* How to debug issues related to API calls and deployment
* How to manage environment variables using `.env`
* How to structure a full-stack project professionally

---

## 🛠️ Technologies Used

| Layer           | Technology Used         |
| --------------- | ----------------------- |
| Backend         | Node.js, Express.js     |
| Frontend        | React, Vite, JavaScript |
| Deployment      | Render                  |
| Version Control | Git & GitHub            |

---

## ✨ Final Note

This project helped me understand real-world full-stack development workflow, from building APIs to deploying and making them publicly accessible. I look forward to improving it further with authentication, database integration, and better UI in the future.

---

**Author:**
Mahesh Kudleppanavar
Full-Stack Enthusiast 🚀
