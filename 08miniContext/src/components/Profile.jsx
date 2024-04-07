import react, { useContext, useState } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div>Please login</div>;

  return (
    <div>
      Hello {user.username} <br />
      your password is {user.pass}
    </div>
  );
}

export default Profile;
