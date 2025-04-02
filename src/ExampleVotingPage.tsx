import React, { useState } from "react";
import { postData } from "./api";

const VotingPage: React.FC = () => {
  const [question, setQuestion] = useState<string | null>(null);
  const [vote, setVote] = useState<number | null>(null);
  const userId = "123"; // Replace with actual user ID

  const fetchQuestion = async () => {
    try {
      const response = await postData("get-question", { user_id: userId });
      setQuestion(response.body);
    } catch (err) {
      console.error("Failed to fetch question");
    }
  };

  const submitVote = async () => {
    if (!vote) return;
    try {
      await postData("post-vote", {
        id: "456",
        question_id: "789",
        vote,
        user_id: userId,
        created_at: new Date().toISOString(),
      });
      alert("Vote submitted!");
    } catch (err) {
      console.error("Failed to submit vote");
    }
  };

  return (
    <div>
      <button onClick={fetchQuestion}>Load Question</button>
      {question && <p>{question}</p>}
      <button onClick={() => setVote(1)}>Vote 1</button>
      <button onClick={() => setVote(2)}>Vote 2</button>
      <button onClick={() => setVote(3)}>Vote 3</button>
      <button onClick={submitVote}>Submit Vote</button>
    </div>
  );
};

export default VotingPage;
