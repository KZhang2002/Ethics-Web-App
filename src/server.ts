import express from "express";
import cors from "cors";
import { Pool } from "pg";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON request bodies

// PostgreSQL connection
const pool = new Pool({
  user: "your_user",
  host: "your_host",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

// --------------------------------------
// # Submissions Page: Post a Question
// --------------------------------------
app.post("/post-question", async (req, res) => {
  const { id, title, body, user_id, created_at } = req.body;
  try {
    const query = `
      INSERT INTO questions (id, title, body, user_id, created_at)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const result = await pool.query(query, [id, title, body, user_id, created_at]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to insert question" });
  }
});

// --------------------------------------
// # Profile Page: Show User Profile
// --------------------------------------
app.post("/get-profile", async (req, res) => {
  const { id } = req.body;
  try {
    const query = `
      SELECT username, year, first_name, lastname, department, created_at
      FROM users
      WHERE id = $1;
    `;
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

// --------------------------------------
// # Results Page: Show all Questions by a User
// --------------------------------------
app.post("/get-questions", async (req, res) => {
  const { user_id } = req.body;
  try {
    const query = `
      SELECT question.body
      FROM question
      JOIN users ON question.user_id = users.id
      WHERE users.id = $1;
    `;
    const result = await pool.query(query, [user_id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// --------------------------------------
// # Voting Page: Show Individual Question
// --------------------------------------
app.post("/get-question", async (req, res) => {
  const { user_id } = req.body;
  try {
    const query = `
      SELECT question.body
      FROM question
      JOIN users ON question.user_id = users.id
      WHERE users.id = $1;
    `;
    const result = await pool.query(query, [user_id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

// --------------------------------------
// # Voting Page: Post a Vote
// --------------------------------------
app.post("/post-vote", async (req, res) => {
  const { id, question_id, vote, user_id, created_at } = req.body;
  try {
    const query = `
      INSERT INTO votes (id, question_id, vote, user_id, created_at)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const result = await pool.query(query, [id, question_id, vote, user_id, created_at]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit vote" });
  }
});

// --------------------------------------
// # Forgot Password Page: Update Password
// --------------------------------------
app.post("/update-password", async (req, res) => {
  const { user_id, new_password } = req.body;
  try {
    const query = `
      UPDATE users
      SET password = $1
      WHERE id = $2;
    `;
    await pool.query(query, [new_password, user_id]);
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update password" });
  }
});

// --------------------------------------
// # Chat & Results Page: Get Vote Counts
// --------------------------------------
app.post("/get-vote-count", async (req, res) => {
  const { question_id } = req.body;
  try {
    const query = `
      SELECT COUNT(*) AS vote_count
      FROM vote
      WHERE question_id = $1;
    `;
    const result = await pool.query(query, [question_id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch vote count" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
