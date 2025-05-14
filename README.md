# 🧠 AI Math Solver — Full Stack Project

An AI-powered full-stack web app that:
- Accepts math questions from users
- Uses an LLM (language model) to generate Python code to solve them
- Executes the code securely
- Returns the final answer
- Saves each question and answer to a MongoDB database

---

## 🛠️ Tech Stack

| Layer       | Technology |
| ----------- | ----------- |
| Frontend    | React.js    |
| Backend     | Node.js + Express.js |
| AI Server   | FastAPI (Python) |
| Database    | MongoDB (local) |

---

## 📂 Project Structure

```
project-root/
├── client/          # React frontend
├── server/          # Node.js backend
├── ai_server/       # FastAPI AI microservice
├── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd project-root
```

---

### 2. Install Dependencies

#### Backend (Node.js)

```bash
cd server
npm install
```

#### Frontend (React.js)

```bash
cd client
npm install
```

#### AI Server (Python)

```bash
cd ai_server
pip install -r requirements.txt
```

---

### 3. Start Local MongoDB

Make sure MongoDB is installed and running locally:

```bash
mongod
```

---

### 4. Start Servers

- **AI Server (FastAPI)**

```bash
cd ai_server
uvicorn main:app --reload --port 8000
```

- **Backend Server (Node.js)**

```bash
cd server
node index.js
```

- **Frontend Client (React.js)**

```bash
cd client
npm start
```

*Make sure React is running on a different port, like 5173. Create a `.env` file in `/client` with:*
```
PORT=5173
```

---

## 🌐 How It Works

1. User inputs a math question into the frontend.
2. Frontend sends the question to the Node.js backend.
3. Backend forwards the question to the FastAPI server.
4. FastAPI server generates Python code to solve the math question.
5. Code is executed and the answer is returned.
6. Backend saves the question and answer into MongoDB.
7. Frontend displays the final answer to the user.

---

## 📈 Future Improvements

- Fine-tune a real LLM on math problems (e.g., Qwen-0.5B Coder).
- Better error handling for invalid questions.
- Secure Python code execution inside a sandbox.
- Authentication for users (login system).
- Deployment on cloud (AWS, Vercel, Railway).
