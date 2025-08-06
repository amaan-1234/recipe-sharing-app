````markdown
# Recipe Sharing App

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to share, browse, edit, and delete recipes. The app features user-friendly forms with multi-line inputs, rich recipe details (ingredients, steps), and responsive UI with React Router for seamless navigation.

---

## 🚀 Live Demo

Access the live deployed app here (Note: Vercel only supports React so only the frontend of the program is visible. Since Vercel does not support the backend, the recipes will not get added.):  
(https://recipe-app-chi-bice.vercel.app/)

---

## Features

- **Browse Recipes:** View all submitted recipes with detailed descriptions, ingredients, and step-by-step instructions.
- **Add Recipes:** User-friendly form to submit new recipes with support for multi-line ingredients and steps.
- **Client-Side Routing:** Smooth navigation using React Router without page reloads.
- **Express API:** RESTful backend API built with Express and MongoDB for data storage.
- **Environment Configuration:** Uses `.env` files for sensitive data like MongoDB URI and JWT secrets.
- **Responsive Design:** Clean and minimal UI with CSS styling for an enhanced user experience.

---

## Technologies Used

- **Frontend:** React, React Router DOM, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Styling:** CSS3 (custom styles)
- **Other:** Concurrently for running client & server simultaneously, dotenv for environment variables

---

## Installation & Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/amaan-1234/recipe-sharing-app.git
   cd recipe-sharing-app
````

2. **Install dependencies:**

   * For backend:

     ```bash
     cd server
     npm install
     ```

   * For frontend:

     ```bash
     cd ../client
     npm install
     ```

3. **Setup environment variables:**

   Create a `.env` file inside the `server/` folder with:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the app locally:**

   From the project root:

   ```bash
   npm run start
   ```

   This will run both back-end and front-end concurrently.

5. **Open your browser:**

   * Frontend: [http://localhost:3000](http://localhost:3000)
   * Backend API: [http://localhost:5000/api/recipes](http://localhost:5000/api/)

---

## Project Structure

```
recipe-sharing-app/
│
├── client/               # React frontend app
│   ├── public/
│   ├── src/
│   ├── package.json
│
├── server/               # Express backend API
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── package.json
│   └── .env              # environment variables (not committed)
│
├── package.json          # root scripts and dev dependencies
└── README.md             # this file
```

---

## Screenshots
![Home](https://github.com/user-attachments/assets/6fb7193c-cd4a-4a36-b78c-dd603fabbe03)

![All_Recipes](https://github.com/user-attachments/assets/dae0f12c-97bf-4970-8ac5-b6d7ac119d96)

![Add_Recipes](https://github.com/user-attachments/assets/993dcaf0-2e83-424e-88f7-67c4f785d2c5)


## Contact

Created by Amaan Mohamed Kalemullah - feel free to reach out!
---
**Enjoy cooking and sharing recipes! 🍳🍲**
```
