import React from "react";
import { useParams } from "react-router-dom";
import { getFullAddress } from "../utils/common";

const UserDetails = ({ data }) => {
  const { userId } = useParams();
  const user = data.find(u => u.id === Number(userId));
  
  return (
    <div className="user-details">
      <h1>{ user.name }</h1>
      <p>Email: { user.email }</p>
      <p>Phone: { user.phone }</p>
      <p>Address: { getFullAddress(user) }</p>
    </div>
  );
};

export default UserDetails;