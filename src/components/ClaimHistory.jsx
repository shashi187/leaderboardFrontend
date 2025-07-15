import api from "../api/Api";
import { useState,useEffect } from "react";

const ClaimHistory = ({ userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!userId) return;
    const fetchHistory = async () => {
      try {
        const response = await api.get(`/claims/${userId}`);
        console.log('📜 Claim history response:', response.data);
        setHistory(response.data.history); // or response.data.data if your API nests it
      } catch (error) {
        console.error('❌ Error fetching claim history:', error);
        setHistory([]);
      }
    };

    fetchHistory();
  }, [userId]);

  return (
    <div className="pl-24">
      <h3>Claim History</h3>
      <ul>
        {Array.isArray(history) && history.map(h => (
          <li key={h._id}>
            {new Date(h.claimedAt).toLocaleString()} — {h.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;