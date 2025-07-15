import { useState,useEffect } from "react";
import api from "../api/Api";

const Leaderboard = ({ refreshTrigger }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await api.get('/users/leaderboard');
        setUsers(res.data.leaderboard);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };
    fetchLeaderboard();
  }, [refreshTrigger]); 

  return (
    <div className="w-full">
      <h2 className="text-center text-3xl font-bold">Leaderboard</h2>
      <table className="gap-5 text-center w-[80%] mx-auto mt-10" border="5" cellPadding="15">
        <thead>
          <tr>
            <th className="text-xl">Rank</th>
            <th className="text-xl">User</th>
            <th className="text-xl">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) &&users.map((u, index) => (
            <tr key={u._id}>
              <td>{index + 1}</td>
              <td>{u.name}</td>
              <td>{u.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;