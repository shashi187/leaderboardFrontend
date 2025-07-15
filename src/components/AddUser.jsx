import { useState } from "react";
import api from "../api/Api";

const AddUser = ({onUserAdded}) => {
    const [name, setName] = useState('');
    const handleAdd = async () =>{
        if(!name.trim()) return ;
        try {
            await api.post('/users',{name});
            alert(`User "${name}" added successfully`)
            setName('');
            if (onUserAdded) onUserAdded();
        } catch (error) {
            console.log(error);
            alert("Failed to add user");
        }
    }
    return (
        <div className="my-5 flex gap-5 w-[50%] mx-auto" >
        <input
            className="text-2xl bg-gray-300 p-2 rounded-xl"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button className="px-2 py-1 text-white bg-green-400 rounded-xl" onClick={handleAdd}>Add User</button>
        </div>
    );
};

export default AddUser;