import api from "../api/Api";
const ClaimButton = ({ userId,onClaimSuccess }) => {
  const claimPoints = async () => {
    try {
      const res = await api.post('/claims', { userId });
      alert(`🎯 ${res.data.points} points awarded to ${res.data.user.name}`);
      if (onClaimSuccess) onClaimSuccess();
    } catch (err) {
      console.error(err);
      alert('Failed to claim points');
    }
  };

  return (
    <div className="my-5 place-self-center">
      <button className="bg-yellow-500 px-2 py-1 rounded-xl text-white" onClick={claimPoints}>Claim Random Points</button>
    </div>
  );
};

export default ClaimButton;