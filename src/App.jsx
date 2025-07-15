import { useState } from "react";
// import './app.css'
import AddUser from "./components/AddUser";
import UserSelect from "./components/UserSelect";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import ClaimHistory from "./components/ClaimHistory";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to bg-green-400">
      <h1 className="text-4xl py-10 text-center font-bold">🏆 Leaderboard Web</h1>
      <p className="px-10 text-lg">Add a user or select one of the user from the dropdown to claim random points and climb the leaderboard.</p>
      <AddUser onUserAdded={handleRefresh} />
      <UserSelect onSelect={setSelectedUser} refreshTrigger={refreshTrigger} />
      {selectedUser && (
        <>
          <ClaimButton userId={selectedUser} onClaimSuccess={handleRefresh} />
          <ClaimHistory userId={selectedUser} refreshTrigger={refreshTrigger} />
        </>
      )}
      <Leaderboard refreshTrigger={refreshTrigger} />
    </div>
  );
}

export default App;
