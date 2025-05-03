import { useEffect, useState } from "react";
import classes from "./UserProfile.module.css";

interface IProps {
  userId: number;
}

interface IUser {
  name: string;
  email: string;
}

function UserProfile({ userId }: IProps) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
