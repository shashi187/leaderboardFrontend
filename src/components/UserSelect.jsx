import { useEffect, useState } from 'react';
import api from '../api/Api';

const UserSelect = ({ onSelect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () =>{
        const res = await api.get('/users');
        console.log("Users are",res.data.users);
        setUsers(res.data.users);
    }
    fetchUsers();
  }, []);

  return (
    <select className='text-3xl my-5 ml-5' onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" className='' disabled>Select a user</option>
      {Array.isArray(users) && users.map(user => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelect;
