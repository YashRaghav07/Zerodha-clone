# 💹 Zerodha Clone - Stock Trading Platform (Academic Project)

A full-stack stock trading web application inspired by [Zerodha](https://zerodha.com/), allowing users to simulate buying and selling stocks, view portfolio.

> ⚠️ This is an academic project and **does not use real stock market data** or enable actual trading.

---

## 🚀 Features

- 🔐 User Registration and Login (JWT authentication)
- 📊 View and search mock stock prices
- 💸 Simulated Buy/Sell of stocks
- 📁 Portfolio management with profit/loss calculations
- 🧾 Transaction history page
- 📈 Stock charts using Chart.js/Recharts
- Responsive UI using React and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS / Bootstrap
- React Router DOM
- Chart.js / Recharts

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js

---

## ⚙️ Project Structure

zerodha-clone/
│
├── frontend/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
│
├── backend/ # Node.js Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
| ├── schema/
│ └── index.js
|
├── dashboard/ # React Dashboard
│ ├── public/
│ └── src/
│ ├── components/
│ ├── App.js
│ └── index.js
│
├── .env # Environment Variables
├── README.md
└── package.json


---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone

#Setup Backend
cd backend
npm install
# Create a `.env` file and add MongoDB URI and JWT secret
npm start

#Setup Frontend
cd frontend
npm install
npm start

#Setup Dashboard
cd dashboard
npm install
npm start

🧪 Sample Login
You can use mock credentials or register a new user:

Email: demo@example.com
Password: demo123

📊 Mock Stock Data
All stock data is generated manually or randomized in backend.
You can modify data/stocks.json or MongoDB collection as needed.

🔒 Disclaimer
This application is a simulation and does not provide real-time or financial trading services. It is built solely for educational purposes.

📚 License
This project is open-source and available under the MIT License.

👨‍💻 Author
Yash Raghav
BCA 4th Semester
Chaudhary Charan Singh University, Meerut

---


