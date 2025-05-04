import { useEffect, useMemo, useState } from "react";
import randomBetween from "../../utils/randomBetween";

interface IUser {
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<IUser | null>(null);
  const randomUserId = useMemo(() => 
      randomBetween(1, 10), 
    []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [randomUserId]);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;